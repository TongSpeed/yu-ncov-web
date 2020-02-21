
import { useWorldsQuery, WorldsQuery } from '../generated/hook/statByWorld.generated'
import { TPage } from '../types'
import { CountryVirusRecord,VRecordNorm, WorldRecord} from './types'
import { getLastRecordAtString, getWorldLink} from './viewHelper'
import { CountryRecord } from './model'
import { template } from './common'
import {countries} from './countries'
export type WorldResult = { current: CountryVirusRecord[], items: CountryVirusRecord[] }
export const world = (variable: any): TPage< Array<WorldRecord>> => ({
    _type: 'page',
    model: CountryRecord,
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
        ...template("world", CountryRecord),
        countries({ last:true })
    ]
});
export default world