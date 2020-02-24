
import { buildi18n } from 'macoolka-i18n'
export const i18n=buildi18n({defaultLocale:'zh'})
import {formatString} from 'macoolka-date'
export const formatDate=(format:"medium" | "default" | "long" | "short" | "full" | "longDateTime" | "shortDateTime")=>
(value:string|number|Date)=>{
    const _value=new Date(value)
    let dateString='yyyy年MM月dd日 HH:mm'
    switch (format){
        case 'short':
            dateString= 'MM-dd'
    }
    return formatString(dateString)(_value)
}
export default i18n