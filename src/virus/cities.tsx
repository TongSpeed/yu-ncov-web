import { useStatByCityQuery, StatByCityQuery } from '../generated/hook/statByCity.generated'
import { TCard, TFormatField } from '../types'
import { CityVirusRecord } from './types'
import { CityRecord } from './model'
import { formatDate } from '../helper/typeHelper'
import { pipe } from 'fp-ts/lib/pipeable'
import Link from '../components/Link'
import { getCityByLastDate } from './helper'

import { cityTable,getCityLink } from './viewHelper'
export const cities = (variable: any={}): TCard<CityVirusRecord[]> => ({
    _type: 'card',
    model: CityRecord,
    query: {
        useQuery: useStatByCityQuery,
        queryName: "cityRecords",
        variable:{
            ...variable,
            last:true
        },
        
    },

    title:{
        items:[{
            _type:'field',
            field:  "城市疫情表",
        }]
    },  
    subTitle:{
        items:[{
            _type:'field',
            field:   (date) => date.length > 0 ? formatDate(date[0].recordAt) : "疫情表",
        }]
    }, 
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    transform: (as: StatByCityQuery['cityRecords']): CityVirusRecord[] => {

     /*    const values = as.map(a => ({
            ...a,
            province: a.province.title,
            
            country: a.country.title,
            city: a.city.title,
            provinceId:a.province.cuid,
            countryId:a.country.cuid,
            cityId:a.city.cuid
            
        } as CityVirusRecord)) */

        return pipe(
            as,
            getCityByLastDate,
        ) as CityVirusRecord[]
    },
    items: {
        _type: 'table',
        grid: {
            xs: 12,
            sm: 12,
            md: 12,
        },
        ord:{
            name:'confirmedCount',
            order:'desc'
        },
        model: {
            ...CityRecord,
            fields: CityRecord.fields.map(a => {
                if (a.name === 'city') {
                    return {
                        ...a,
                        formating: (value: CityVirusRecord) => {
                           const link= getCityLink(value)
                           // const name = value ? value.city : 'null'
                           // const id = value ? value.cityId : 'null'
                            return (<Link href={link.href} as={link.as}><a>{link.title}</a></Link>)
                        }
                    } as TFormatField
                } else {
                    return a
                }
            })
        },
        names:cityTable
    }
});
export default cities