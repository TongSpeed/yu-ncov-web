import { CountryVirusRecord, VRecordNorm } from './types'
import { useStatByCountryQuery, StatByCountryQuery, } from '../generated/hook/statByContry.generated'
import { getCountryLink, getWorldLink, getLastRecordAtString } from './viewHelper'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { TPage } from '../types'
import { CountryRecord } from './model'
import { template } from './common'
import provinces from './provinces'

export const country = (variable: any): TPage<Array<CountryVirusRecord>> => ({
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
    title: {
        items: [{
            _type: 'field',
            field: (as) => getLastRecordAtString(as),
        }]
    },

    items: [
        ...template("country", CountryRecord),
        provinces({ country: variable.country })
    ]
})

export default country