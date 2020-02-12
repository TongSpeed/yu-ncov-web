import { TField,TModel } from '../types'
import { get } from 'macoolka-object'
import * as A from 'fp-ts/lib/Array'

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import * as dateFns from 'date-fns';
import { isMaybe } from 'macoolka-predicate'
import { Eq } from 'fp-ts/lib/Eq'
const getDefaultValue = (defaultValue: TField['defaultValue']) => defaultValue === 'now'
    ? (new Date()).toISOString()
    : defaultValue === 'yesterday'
        ? dateFns.addDays(new Date(), -1).toISOString()
        : defaultValue
export const getFieldValue = (field: TField) => (a: any) => {
    return get(a, field.name, getDefaultValue(field.defaultValue))
}
export const convertFieldValueToString = (field: TField) => (a: any) => {
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

export const convertFieldValueToNode = (field: TField) => (a: any): React.ReactNode => {
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
export const getField = ({fields}: TModel) => (name: string) =>
    pipe(
        fields,
        A.findFirst(a => a.name === name),
        O.getOrElse(() => {
            throw new Error(`Field${name} not found `)
        })
    )

export const getFields = (model: TModel) => (names: string[]) => {
    return pipe(
        names.map(getField(model)),
        A.compact,
    )
}
export const group = <A>(S: Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
    return A.chop(as => {
        const { init, rest } = A.spanLeft((a: A) => S.equals(a, as[0]))(as)
        return [init, rest]
    })
}