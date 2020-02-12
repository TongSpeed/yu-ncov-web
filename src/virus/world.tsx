
import { useStatByCountryQuery, StatByCountryQuery } from '../generated/hook/statByContry.generated'
import { TPage, TFormatField } from '../types'
import { CountryVirusRecord, } from './types'
import { getCountryByLastDate, getSumCountry, getLastRecordAtString, getWorldLink, countryTable } from './helper'
import { CountryRecord } from './model'
import { formatDate } from '../helper/typeHelper'
import { template } from './common'
import Link from '../components/Link'

export type WorldResult = { current: CountryVirusRecord[], items: CountryVirusRecord[] }
export const provinces = (variable: any): TPage<WorldResult> => ({
    _type: 'page',
    model: CountryRecord,
    query: {
        useQuery: useStatByCountryQuery,
        queryName: "countryRecords",
        variable
    },
    titles: [getWorldLink()],
    //title: "世界疫情",
    title: {
        items: [{
            _type: 'field',
            field: (data) => getLastRecordAtString(data.items),
        }]
    }, // date.current.length > 0 ? `最后更新时间：${formatDate(date.current[0].recordAt)}` : "",
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    transform: (as: StatByCountryQuery['countryRecords']): WorldResult => {

        const values = as.map(a => ({
            ...a,
            country: a.country.title,
            countryId: a.country.cuid,
        } as CountryVirusRecord))

        return {
            current: getSumCountry(values),
            items: getCountryByLastDate(values)
        }
    },
    items: [...template("world", CountryRecord, a => a.current) as any,
    {
        _type: 'card',
        title: {
            items: [{
                _type: 'field',
                field: "各国疫情表",
            }]
        },

        subTitle: {
            items: [{
                _type: 'field',
                field: (date:any) => date.length > 0 ? formatDate(date[0].recordAt) : "疫情表",
            }]
        },
        grid: {
            xs: 12,
            sm: 12,
            md: 12
        },
        transform: (as: WorldResult): CountryVirusRecord[] => {
            return as.items

        },
        items: {
            _type: 'table',
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
                                const name = value ? value['country'] : 'null'
                                const id = value ? value.countryId : 'null'
                                return (<Link href={`/country/[id]`} as={`/country/${id}`}><a>{name}</a></Link>)
                            }
                        } as TFormatField
                    } else {
                        return a
                    }
                })
            },
            names: countryTable,
        }

    }]
});
export default provinces