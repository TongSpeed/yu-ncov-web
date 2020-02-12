import { CountryVirusRecord } from './types'
import { useStatByCountryQuery, StatByCountryQuery, } from '../generated/hook/statByContry.generated'
import { toVirusRecords, ordRecordAt, getCountryLink, getWorldLink ,getLastRecordAtString} from './helper'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { TPage, TLink } from '../types'
import { CountryRecord } from './model'
import { template } from './common'
import { today5Day } from '../helper/typeHelper'
import provinces from './provinces'

export const country = (variable: any): TPage<CountryVirusRecord[]> => ({
    _type: 'page',
    model: CountryRecord,
    query: {
        useQuery: useStatByCountryQuery,
        queryName: "countryRecords",
        variable
    },
    titles: (as) => pipe(
        as,
        A.head,
        O.map((a) => [getWorldLink(), getCountryLink(a)]),
        O.getOrElse(() => [getWorldLink()])
    ),
     title:{
        items:[{
            _type:'field',
            field:  (as) => getLastRecordAtString(as),
        }]
    },  
    
    transform: (as: StatByCountryQuery['countryRecords']): CountryVirusRecord[] => {
        return pipe(
            as,
            A.map(a => ({ ...a, country: a.country.title,countryId:a.country.cuid } as CountryVirusRecord)),
            A.sort(ordRecordAt),
            A.reverse,
            as => toVirusRecords(as) as CountryVirusRecord[],
            A.reverse,

        )
    },
    items: [...template("country", CountryRecord), {
        ...provinces({ country: variable.country[0], ...today5Day() })

    }
    ]
})

export default country