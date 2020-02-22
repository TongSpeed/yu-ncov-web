import { pipe } from 'fp-ts/lib/pipeable'
import { join } from 'path'
import dxyToVirusInput, { toNCOVRecordFromJson } from './dxyToVirusInput'
import { buildStore } from 'macoolka-store-fs'
import * as TE from 'fp-ts/lib/TaskEither'
import base from '../data/ncov.json'

import { scrapeToRecord } from 'yu-ncov-scrape-dxy'
import createLogger from 'macoolka-log'
import { showUnknow } from 'macoolka-object'
import * as dateFns from 'date-fns';
import { formatJson } from 'macoolka-prettier'
import { timer } from 'rxjs';
import {NCOVRecord} from 'yu-ncov-scrape-dxy/lib/convert'
import { fromJsonToVirus, fromVirusToJson, foldVirus } from '../src/virus/helper'
import deploy from './now'
const baseVirus = fromJsonToVirus(base)
const store = buildStore(join(process.cwd()))
/* const buildData1 = (a:NCOVRecord) => pipe(
    store.glob({ container: 'history', folders: [], pattern: "*.json" }),
    TE.chain(files =>
        pipe(
            files,
            A.map(file => pipe(
                file,
                store.readTextFile,
                TE.map(f => {
                    const data = dxyToVirusInput(baseVirus)(toNCOVRecordFromJson(JSON.parse(f.data)))
                    return data
                }),

            )),
            A.array.sequence(TE.taskEither)

        )

    ),
    TE.map(as => foldVirus([baseVirus, ...as])),
    TE.chain(a => store.createFile({ container: '', folders: ['..'], name: 'ncov.json', data: JSON.stringify(fromVirusToJson(a)) }))
) */
const buildData = (a:NCOVRecord) => pipe(
    dxyToVirusInput(baseVirus)(toNCOVRecordFromJson(a)),
    b => foldVirus([baseVirus, b]),
    b => store.createFile({ container: '', folders: [], name: 'ncov.json', data: JSON.stringify(fromVirusToJson(b)) })
)
const start = () => {
    const filename = (a: Date) => `ncov_${dateFns.format(a, 'yyyy_MM_dd')}.json`;
    const logger = createLogger()
    const interval = process.env.TIMER_INTERVAL ? Number(process.env.TIMER_INTERVAL) : 15 * 60 * 1000
    const numbers = timer(1000, interval);

    numbers.subscribe(x => pipe(
        TE.rightTask(scrapeToRecord),
        TE.chainFirst(a => {
            return TE.right(logger.info(`get new data at ${dateFns.format(a.countries[0].recordAt, 'yyyy-MM-dd HH:mm')}`))
        }),
        TE.chainFirst((a) => {
            const name = join(process.cwd(), 'yu-ncov-data', 'data','dxy', filename(a.countries[0].recordAt))
            return pipe(
                store.createFile({ container: 'history', folders: [], name: filename(a.countries[0].recordAt), data: formatJson(a) }),
                TE.map(() => {
                    logger.info(`data save to ${name}`)
                })
            )

        }),
        TE.chain(buildData),
        TE.map(() => logger.info(`data save over`)),
        TE.chain(()=>TE.rightTask(()=>deploy()))
    )().catch(a => {
        logger.error(showUnknow.show(a))
    }));
}
export default start
