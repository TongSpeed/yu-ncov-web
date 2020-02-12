
import { useStatByProvinceQuery,StatByProvinceQuery } from '../generated/hook/statByProvince.generated'

import {TPage,TLink} from '../types'
import { toVirusRecords,ordRecordAt,getWorldLink,getCountryLink,getProvinceLink ,getLastRecordAtString } from './helper'
import { formatDate } from '../helper/typeHelper'
import { ProvinceRecord } from './model'
import { template } from './common'
import {ProvinceVirusRecord} from './types'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'

import { today5Day } from '../helper/typeHelper'
import cities from './cities'
export const province=(variable:any):TPage<ProvinceVirusRecord[]>=>({
    _type:'page',
    model:ProvinceRecord,
    query:{
        useQuery: useStatByProvinceQuery,
        queryName: "provinceRecords",
        variable,
    },
    titles: (as) => pipe(
        as,
        A.head,
        O.map((a) => [getWorldLink(), getCountryLink(a),getProvinceLink(a)]),
        O.getOrElse(() => [] as TLink[])
    ),
    title:{
        items:[{
            _type:'field',
            field:    (as) => getLastRecordAtString(as),
        }]
    }, 
  
    transform:(as:StatByProvinceQuery['provinceRecords'])=>{
      return  pipe(
            as,
            A.map(a=>({...a,country:a.country.title,province:a.province.title,
                countryId:a.country.cuid,
                 provinceId:a.province.cuid,
              
            }  as ProvinceVirusRecord)),
            A.sort(ordRecordAt),
            A.reverse,
            as=>toVirusRecords(as) as ProvinceVirusRecord[],
            A.reverse,

        )
    },
     items: [...template("province", ProvinceRecord), cities({ province: variable.province[0], ...today5Day() })
]
}) 
export default province