
import { useStatByCityQuery, StatByCityQuery } from '../generated/hook/statByCity.generated'
import { TPage, TLink } from '../types'
import { toVirusRecords, ordRecordAt, getCountryLink, getProvinceLink, getCityLink, getWorldLink, getLastRecordAtString } from './helper'
import { formatDate } from '../helper/typeHelper'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { CityVirusRecord } from './types'
import { CityRecord } from './model'
import { template } from './common'
export const city = (variable: any): TPage<CityVirusRecord[]> => ({
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
        O.map((a) => [getWorldLink(), getCountryLink(a), getProvinceLink(a), getCityLink(a)]),
        O.getOrElse(() => [] as TLink[])
    ),
    title:{
        items:[{
            _type:'field',
            field:    (as) => getLastRecordAtString(as),
        }]
    }, 
    transform: (as: StatByCityQuery['cityRecords']) => {
        return pipe(
            as,
            A.map(a => ({ ...a, country: a.country.title,
                 province: a.province.title, city: a.city.title,
                 countryId:a.country.cuid,
                 provinceId:a.province.cuid,
                 cityId:a.city.cuid,
                 } as CityVirusRecord)),
            A.sort(ordRecordAt),
            A.reverse,
            as => toVirusRecords(as) as CityVirusRecord[],
            A.reverse,

        )
    },
    items: [...template("city", CityRecord)]
})
export default city