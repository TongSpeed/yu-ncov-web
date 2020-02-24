
import { useStatByProvinceQuery } from '../generated/hook/statByProvince.generated'

import {TPage,TLinkData} from 'macoolka-model-core'
import {getWorldLink,getCountryLink,getProvinceLink ,getLastRecordAtString} from './viewHelper'
import { ProvinceRecord,ProvinceVirusRecord,VRecordNorm } from 'yu-ncov-core'
import { template } from './common'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
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