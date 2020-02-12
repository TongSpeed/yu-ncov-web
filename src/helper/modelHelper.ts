import { TFormatModel, TFieldValue, TFormatField } from '../types'
import { get } from 'macoolka-object'
import * as A from 'fp-ts/lib/Array'

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as dateFns from 'date-fns';
import { isMaybe, isString, isFunction, } from 'macoolka-predicate'
import { Eq } from 'fp-ts/lib/Eq'
const getDefaultValue = (defaultValue: TFormatField['defaultValue']) => defaultValue === 'now'
    ? (new Date()).toISOString()
    : defaultValue === 'yesterday'
        ? dateFns.addDays(new Date(), -1).toISOString()
        : defaultValue
export const getFieldValue = (field: TFormatField) => (a: any) => {
    return get(a, field.name, getDefaultValue(field.defaultValue))
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

export const convertFieldValueToNode = (field: TFormatField) => (a: any): React.ReactNode => {
    const value = getFieldValue(field)(a)
    if (isMaybe(value)) {
        return null
    }
    switch (field.type) {

        case 'date':
            return dateFns.format(new Date(value), field.format ? field.format : 'yyyy年MM月dd日')
        case 'datetime':
            return dateFns.format(new Date(value), field.format ? field.format : 'yyyy年MM月dd日 HH:mm')
        default:
            return value
    }
}
export const getField = ({ fields }: TFormatModel<any>) => (name: string): TFormatField => {
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


export const getFields = (model: TFormatModel<any>) => (names: string[]): TFormatField[] => {
    return names.map(getField(model))
}
export const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
    return A.chop(as => {
        const { init, rest } = A.spanLeft((a: A) => S.equals(a, as[0]))(as)
        return [init, rest]
    })
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
                return convertFieldValueToNode(field)(value)
            }
        }
    }



}