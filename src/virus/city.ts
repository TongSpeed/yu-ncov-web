
import { useStatByCityQuery, StatByCityQuery } from '../generated/hook/statByCity.generated'
import { TPage, TLinkData, } from 'macoolka-model-core'
import { getCountryLink, getProvinceLink, getCityLink, getWorldLink, getLastRecordAtString} from './viewHelper'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { CityVirusRecord ,VRecordNorm,CityRecord} from 'yu-ncov-core'
import { template } from './common'
export const city = (variable: any): TPage<Array<CityVirusRecord&VRecordNorm>> => ({
    _type: 'page',
    model: CityRecord,
    query: {
        useQuery: useStatByCityQuery,
        queryName: "cityRecords",
        variable
    },
    titles: (as) => pipe(
        as,
        A.head,
        O.map((a) => [getWorldLink(), getCountryLink(a.city.province), getProvinceLink(a.city), getCityLink(a)]),
        O.getOrElse(() => [] as TLinkData[])
    ),
    title:{
        items:[{
            _type:'field',
            field:    (as) => getLastRecordAtString(as),
        }]
    }, 
  
    items: [...template("city", CityRecord)]
})
export default city