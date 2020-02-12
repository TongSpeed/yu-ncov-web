import { TTableData,TFormatField } from '../types'
import {convertFieldValueToNode} from './formatFieldHelper'
export const convertTTableData=(fields:TFormatField[])=>(as:any[]):TTableData=>{
    const titles=fields.map(a=>a.title)
    const data=as.map(a=>{
        return fields.map(field=>{
            const value=  convertFieldValueToNode(field)(a)
            return value
        })
    })
    return {
        titles,
        data
    }
}