import { TFormatModel, TFieldValue, TFormatField, TModel, TBasicType, Order,MediaType } from '../types'
import { get } from 'macoolka-object'
import * as A from 'fp-ts/lib/Array'

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as dateFns from 'date-fns';
import { isMaybe, isString, isFunction, } from 'macoolka-predicate'
import { Eq } from 'fp-ts/lib/Eq'
import { buildi18n } from 'macoolka-i18n'
import { ordBoolean, ordNumber, ordDate, ordString, Ord,contramap } from 'fp-ts/lib/Ord'
const i18n = buildi18n({ defaultLocale: 'zh' })
export const mediaTypes:MediaType[]=['xs','sm','lg','xl']
export const isNumberType = (a: TFormatField) => a.type === 'int' || a.type === 'number'
export const getBasicTypeByField = (a: TFormatField): TBasicType =>
    (a.type === 'int' || a.type === 'number')
        ? 'number'
        : (a.type === 'datetime' || a.type === 'date')
            ? 'datetime'
            : a.type === 'boolean'
                ? 'boolean'
                : 'string'
export const ordAscByType: Record<TBasicType, Ord<any>> = {
    number: ordNumber,
    datetime: ordDate,
    boolean: ordBoolean,
    string: ordString
}
export const ordDescByType: Record<TBasicType, Ord<any>> = {
    number: {
        ...ordNumber,
        compare: (a, b) => ordNumber.compare(b, a)
    },
    datetime: {
        ...ordDate,
        compare: (a, b) => ordDate.compare(b, a)
    },
    boolean: {
        ...ordBoolean,
        compare: (a, b) => ordBoolean.compare(b, a)
    },
    string: {
        ...ordString,
        compare: (a, b) => ordString.compare(b, a)
    },
}
export const ordByType = (o: Order) => (t: TBasicType): Ord<any> =>
    o === 'asc'
        ? ordAscByType[t]
        : ordDescByType[t]

export const isDateType = (a: TFormatField) => a.type === 'datetime' || a.type === 'date'
export const isStringType = (a: TFormatField) => a.type === 'string'

export const isModel = (a: any): a is TModel => a && a._type && a._type === 'model'
const getDefaultValue = (defaultValue: TFormatField['defaultValue']) => defaultValue === 'now'
    ? (new Date()).toISOString()
    : defaultValue === 'yesterday'
        ? dateFns.addDays(new Date(), -1).toISOString()
        : defaultValue
export const getFieldValue = (field: TFormatField) => (a: any) => {
    return field.calculate ? field.calculate(a) : get(a, field.name, getDefaultValue(field.defaultValue))
}
export const convertFieldValueToString = (field: TFormatField) => (a: any) => {
    const value = getFieldValue(field)(a)
    if (isMaybe(value)) {
        return ''
    }
    switch (field.type) {
        case 'int':
        case 'number':
            return String(value)
        case 'date':
            return dateFns.format(new Date(value), field.format ? field.format : 'yyyy年MM月dd日')
        case 'datetime':
            return dateFns.format(new Date(value), field.format ? field.format : 'yyyy年MM月dd日 HH:mm')
        default:
            return value
    }
}

export const convertFieldValueToNode = (field: TFormatField,short?:boolean) => (a: any): React.ReactNode => {
    const value = getFieldValue(field)(a)
    if (isMaybe(value)) {
        return null
    }
    switch (field.type) {
        case 'number':
            if (field.format === 'percent') {
                return i18n.formatNumber('precent')(value)

            }
            return Number(value).toFixed(4)
        case 'date':
            return dateFns.format(new Date(value), short?
            (field.shortFormat?field.shortFormat:field.format ? field.format : 'yy年MM月dd日'):
            field.format ? field.format :'yyyy年MM月dd日')
        case 'datetime':
            return dateFns.format(new Date(value), field.format ? field.format : short?'yy年MM月dd日 HH:mm':'yyyy年MM月dd日 HH:mm')
        default:
            return value
    }
}
export const _getField = ({ fields }: TFormatModel<any>) => (name: string): TFormatField => {
    const names = name.split('.')

    const value = pipe(
        fields,
        A.findFirst(a => a.name === name),


    )
    if (O.isSome(value)) {
        return value.value
    } else {

        throw new Error(`Field${name} not found `)

    }
}
export const _getFieldWithName = ({ fields }: TFormatModel<any>) => (name: string): TFormatField => {

    const value = pipe(
        fields,
        A.findFirst(a => a.name === name),


    )
    if (O.isSome(value)) {
        return value.value
    } else {

        throw new Error(`Field${name} not found `)

    }
}
export const getField = (model: TFormatModel<any>) => (name: string): TFormatField => {
    let _model = model
    const names = name.split('.')
    for (var i = 0; i < names.length - 1; i++) {
        const result = _getFieldWithName(_model)(names[i])
        if (isModel(result.type)) {
            _model = result.type
        } else {
            throw new Error(`Model${names[i]}  not found in ${name}`)
        }

    }
    // const _name=names.length>2
    return _getFieldWithName(_model)(names[names.length - 1])
}

export const getFields = (model: TFormatModel<any>) => (names: string[]): TFormatField[] => {
    return names.map(getField(model))
}
export const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
    return A.chop(as => {
        const { init, rest } = A.spanLeft((a: A) => S.equals(a, as[0]))(as)
        return [init, rest]
    })
}
export const getOrdByField = (model: TFormatModel<any>) => ({ name, order }: { name: string, order: Order }) =>{
   const fieldOrd= pipe(
        name,
        getField(model),
        getBasicTypeByField,
        ordByType(order)
       
    )
    return contramap<any,Ord<any>>(a=>a[name])(fieldOrd)
}
export const getModelData = (model: TFormatModel<any>) => (data:any) =>{
    return pipe(
        model.fields,
        A.filter(field=>isFunction(field.calculate)),
        A.reduce(data,(reulst,c)=>({
            ...data,
            [c.name]:c.calculate!(data)
        }))
        
     )
 }
 export const getModelDataArray = (model: TFormatModel<any>) => (data:any[]) =>{
    return pipe(
        data,
        A.map(getModelData(model)),
        
     )
 }
export const getTFieldValue = (model?: TFormatModel<any>) => (value: any) => (fieldValue?: TFieldValue<any>) => {
    if (isMaybe(fieldValue))
        return undefined;
    if (isString(fieldValue))
        return fieldValue
    else if (isFunction(fieldValue))
        return fieldValue(value)
    else {
        let field: TFormatField
        if (!isString(fieldValue.field)) {
            field = fieldValue.field
        } else {
            if (isMaybe(model)) {
                throw new Error(`model can not is null ${fieldValue.field} `)
            }
            field = getField(model)(fieldValue.field)
        }
        if (fieldValue.type === 'label') {
            return field.title
        } else {
            if (field.formating) {
                return field.formating(value)
            } else {
                return convertFieldValueToNode(field,fieldValue.short)(value)
            }
        }
    }



}