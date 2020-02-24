
import { useWorldsQuery } from '../generated/hook/statByWorld.generated'
import { TPage } from 'macoolka-model-core'
import { CountryVirusRecord, WorldRecord,BasicRecord} from 'yu-ncov-core'
import { getLastRecordAtString, getWorldLink} from './viewHelper'
import { template } from './common'
import {countries} from './countries'
export type WorldResult = { current: CountryVirusRecord[], items: CountryVirusRecord[] }
export const world = (variable: any): TPage< Array<WorldRecord>> => ({
    _type: 'page',
    model: BasicRecord,
    query: {
        useQuery: useWorldsQuery,
        queryName: "worldRecords",
        variable
    },
    titles: [getWorldLink()],
    title: {
        items: [{
            _type: 'field',
            field: (data) => getLastRecordAtString(data),
        }]
    }, 
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
 
    items: [
        ...template("world", BasicRecord),
        countries({ last:true })
    ]
});
export default world