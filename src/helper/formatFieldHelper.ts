import {TFormatField} from '../types'
import {convertFieldValueToNode as _} from './fieldHelper'
export const convertFieldValueToNode = (field: TFormatField) => (a: any) :React.ReactNode=> {
   
    if(field.formating){
        return field.formating(a)
    }else{
        return _(field)(a)
    }

}