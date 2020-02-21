import { useStatByProvinceQuery, StatByProvinceQuery } from '../generated/hook/statByProvince.generated'
import { TCard, TFormatField } from '../types'
import { ProvinceVirusRecord, } from './types'
import { getProvincesByLastDate,} from './helper'

import { provinceTable,getProvinceLink } from './viewHelper'
import { ProvinceRecord } from './model'
import { formatDate } from '../helper/typeHelper'
import { pipe } from 'fp-ts/lib/pipeable'
import Link from '../components/Link'
export const provinces = (variable: any={}): TCard<ProvinceVirusRecord[]> => ({
    _type: 'card',
    model: ProvinceRecord,
    query: {
        useQuery: useStatByProvinceQuery,
        queryName: "provinceRecords",
        variable:{
            ...variable,
            last:true
        }
    },

    title: {
        items: [{
            _type: 'field',
            field: "各省疫情表",
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
    transform: (as: StatByProvinceQuery['provinceRecords']): ProvinceVirusRecord[] => {
    
        const values = as
     /*    .map(a => ({
            ...a,
            province: a.province.title,
            country: a.country.title,
            provinceId: a.province.cuid,
            countryId: a.country.cuid,

        } as ProvinceVirusRecord)) */
    
        return pipe(
            values,
            getProvincesByLastDate,


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
            ...ProvinceRecord,
            fields: ProvinceRecord.fields.map(a => {
                if (a.name === 'province') {
                    return {
                        ...a,
                        formating: (value: ProvinceVirusRecord) => {
                            const data=getProvinceLink(value)
                        /*     const name = value ? value['province'] : 'null'
                            const id = value ? value.provinceId : 'null' */
                            return (<Link href={data.href} as={data.as}><a>{data.title}</a></Link>)
                        }
                    } as TFormatField
                } else {
                    return a
                }
            })
        },
        names: provinceTable


    }
});
export default provinces