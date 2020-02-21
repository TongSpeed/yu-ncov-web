import { useStatByCountryQuery, StatByCountryQuery } from '../generated/hook/statByContry.generated'
import { TCard, TFormatField } from '../types'
import { CountryVirusRecord, VRecordNorm } from './types'
import { getCountryByLastDate, } from './helper'

import { countryTable, getCountryLink } from './viewHelper'
import { CountryRecord } from './model'
import { formatDate } from '../helper/typeHelper'
import { pipe } from 'fp-ts/lib/pipeable'
import Link from '../components/Link'
export const countries = (variable: any={}): TCard<Array<CountryVirusRecord & VRecordNorm>> => ({
    _type: 'card',
    model: CountryRecord,
    query: {
        useQuery: useStatByCountryQuery,
        queryName: "countryRecords",
        variable:{
            ...variable,
            last:true
        }
    },

    title: {
        items: [{
            _type: 'field',
            field: "各国疫情表",
        }]
    },
    subTitle: {
        items: [{
            _type: 'field',
            field: (date) => date.length > 0 ? formatDate(date[0].recordAt) : "疫情表",
        }]
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    transform: (as: StatByCountryQuery['countryRecords']) => {
        return pipe(
            as,
            getCountryByLastDate,
        )
    },
    items: {
        _type: 'table',
        ord:{
            name:'confirmedCount',
            order:'desc'
        },
        grid: {
            xs: 12,
            sm: 12,
            md: 12,
        },
        model: {
            ...CountryRecord,
            fields: CountryRecord.fields.map(a => {
                if (a.name === 'country') {
                    return {
                        ...a,
                        formating: (value: CountryVirusRecord) => {
                            const data = getCountryLink(value)
                            return (<Link href={data.href} as={data.as}><a>{data.title}</a></Link>)
                        }
                    } as TFormatField
                } else {
                    return a
                }
            })
        },
        names: countryTable


    }
});