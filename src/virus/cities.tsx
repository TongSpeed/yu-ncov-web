import { useStatByCityQuery, StatByCityQuery } from '../generated/hook/statByCity.generated'
import { TCard, TFormatField } from 'macoolka-model-core'
import { CityVirusRecord,CityRecord ,getCityByLastDate} from 'yu-ncov-core'

import { pipe } from 'fp-ts/lib/pipeable'
import Link from '../components/Link'
import {formatDate} from './i18n'
import { cityTable,getCityLink ,fieldLastDate} from './viewHelper'
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
    subTitle:fieldLastDate, 
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