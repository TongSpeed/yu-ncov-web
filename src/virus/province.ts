
import { useStatByProvinceQuery,StatByProvinceQuery } from '../generated/hook/statByProvince.generated'

import {TPage,TLinkData} from '../types'
import {getWorldLink,getCountryLink,getProvinceLink ,getLastRecordAtString} from './viewHelper'
import { formatDate } from '../helper/typeHelper'
import { ProvinceRecord } from './model'
import { template } from './common'
import {ProvinceVirusRecord,VRecordNorm} from './types'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'

import { today5Day } from '../helper/typeHelper'
import cities from './cities'
export const province=(variable:any):TPage<Array<ProvinceVirusRecord&VRecordNorm>>=>({
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
        O.map((a) => [getWorldLink(), getCountryLink(a.province),getProvinceLink(a)]),
        O.getOrElse(() => [] as TLinkData[])
    ),
    title:{
        items:[{
            _type:'field',
            field:    (as) => getLastRecordAtString(as),
        }]
    }, 
  
   
     items: [...template("province", ProvinceRecord), cities({ province: variable.province })
]
}) 
export default province