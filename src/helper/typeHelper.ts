import {  isString } from 'macoolka-predicate'

import * as dateFns from 'date-fns';
export const addOneDay = (a: string) => {

    return dateFns.addDays(new Date(a), 1).toISOString()
}
export const formatDateTime = (format: string = "yyyy年MM月dd日 HH:mm") => (a: string|number|Date): string => {
    return dateFns.format(new Date(a), format)
}

export const formatShortMonthDay = formatDateTime("MM.dd")
export const formatDate = formatDateTime("yyyy年MM月dd日")
export const getDateFromTo = (a: Date | string) => {
    const cloneValue = new Date(isString(a) ? a : a.toISOString())
    const b = new Date(cloneValue.setHours(0, 0, 0, 0))
    return {
        from: b,
        to: dateFns.addDays(b, 1)
    }
}
export const getDateStart = (a: Date | string) => {
    const cloneValue = new Date(isString(a) ? a : a.toISOString())
    const b = new Date(cloneValue.setHours(0, 0, 0, 0))
    return b
}

export const getDateEnd = (a: Date | string) => {
    const cloneValue = new Date(isString(a) ? a : a.toISOString())
    const b = new Date(cloneValue.setHours(24, 24, 60, 0))
    return b
}
export const today = () => ({
    from: getDateStart(new Date()),
    to: getDateEnd(new Date())
    
})
export const today5Day = () => ({
    from: getDateStart(dateFns.addDays(new Date(), -5)),
    to: getDateStart(dateFns.addDays(new Date(), 1))
})