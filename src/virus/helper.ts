import { VRecord, VirusRecord, ProvinceVirusRecord, CityVirusRecord, CountryVirusRecord } from './types'
import * as A from 'fp-ts/lib/Array'
import { contramap, ordNumber, ordDate, ordString, Ord } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'
import { monoidSum, Monoid, getStructMonoid, fold } from 'fp-ts/lib/Monoid'
import * as Eq from 'fp-ts/lib/Eq'
import { formatDateTime, formatDate } from '../helper/typeHelper'
import { notMaybe } from 'macoolka-predicate'
import { TLink } from '../types'

import * as O from 'fp-ts/lib/Option'
const _defaultValue: VRecord = {

    recordAt: 0,
    curedCount: 0,
    deadCount: 0,
    suspectedCount: 0,
    confirmedCount: 0,
}
export const add = <T extends object>(keys: Array<keyof T>) => ([a, b]: [T, T]): any => pipe(
    keys,
    A.reduce({}, (result, key) => ({
        ...result,
        [key + 'Add']: Number(a[key]) - Number(b[key]),
        [key + 'AddRate']: Number(b[key]) === 0 ? 0 : ((Number(a[key]) - Number(b[key])) / Number(b[key])).toFixed(2),
    }))
)
export const toVirusRecords = <T extends VRecord>(as: T[]): T[] => {
    if (as.length >= 2) {
        return pipe(
            A.zip(as, [...as.slice(1), _defaultValue]),
            A.map(([a, b]) => ({
                ...a,
                ...add<VRecord>(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([a, b])
            }))
        )
    } else if (as.length === 1) {
        return add<VRecord>(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([as[0], _defaultValue])
    } else {
        return []
    }
}

export const defaultValue: VirusRecord = {
    ..._defaultValue,
    ...toVirusRecords([_defaultValue, _defaultValue])[0] as any
}

export const ordDeadCount = contramap((a: VirusRecord) => a.deadCount)(ordNumber)

export const ordSuspectedCount = contramap((a: VirusRecord) => a.suspectedCount)(ordNumber)

export const ordConfirmedCount = contramap((a: VirusRecord) => a.confirmedCount)(ordNumber)

export const ordCuredCount = contramap((a: VirusRecord) => a.curedCount)(ordNumber)
export const ordRecordAt = contramap((a: VirusRecord) => new Date(a.recordAt))(ordDate)
export const VirusRecordMonoid = <T extends VRecord>(): Monoid<T> => {
    const m: Monoid<any> = {
        empty: _defaultValue,
        concat: (a, b) => {

            return {
                ...b,
                ...mVRecord.concat(a, b)
            }
        }
    }
    return m
}
const mVRecord = getStructMonoid<Omit<VRecord, 'recordAt'>>({
    curedCount: monoidSum,
    deadCount: monoidSum,
    suspectedCount: monoidSum,
    confirmedCount: monoidSum,
})
export const group = <A>(S: Eq.Eq<A>): ((as: Array<A>) => Array<Array<A>>) => {
    return A.chop(as => {
        const { init, rest } = A.spanLeft((a: A) => S.equals(a, as[0]))(as)
        return [init, rest]
    })
}
const ordProvince = contramap((a: ProvinceVirusRecord) => a.province)(ordString)
const eqProvince = Eq.contramap((a: ProvinceVirusRecord) => a.province)(Eq.eqString)

const eqCity = Eq.contramap((a: CityVirusRecord) => a.city)(Eq.eqString)
const ordCity = contramap((a: CityVirusRecord) => a.city)(ordString)
const eqCountry = Eq.contramap((a: CountryVirusRecord) => a.country)(Eq.eqString)
const ordCountry = contramap((a: CountryVirusRecord) => a.country)(ordString)
const dayEq: Eq.Eq<Date> = {
    equals: (a, b) => {
        return formatDate(a) === formatDate(b)
    }
}
const eqDateByDay = Eq.contramap((a: VirusRecord) => a.recordAt)(dayEq)
export const groupByProvince = (as: ProvinceVirusRecord[]) =>
    pipe(
        as,
        A.sort(ordProvince),
        group(eqProvince),
        A.map(b => pipe(
            b,
            A.sort(ordRecordAt),
            A.reverse,
            toVirusRecords,
        ))
    )
const getListRecord = <T extends VirusRecord>(eq: Eq.Eq<T>, ord: Ord<T>) => (as: T[]): T[] => pipe(
    as,
    A.sort(ord),
    group(eq),
    A.map((b) => pipe(
        b,
        A.sort(ordRecordAt),
        A.reverse,
        toVirusRecords,
    )),
    A.map(a => pipe(
        a,
        A.head,
    )),
    A.compact,
    A.sort(ordConfirmedCount),
    A.reverse,
    A.filter(notMaybe)
) as T[]
const sumRecords = <T extends VirusRecord>(eq: Eq.Eq<T>, ord: Ord<T>) => (as: T[]): T[] => pipe(
    as,
    A.sort(ord),
    group(eq),

    A.map((value: T[]) => pipe(
        value,
        fold(VirusRecordMonoid()),
    )),
 
    A.sort(ordRecordAt),
    A.reverse,
    toVirusRecords,
    A.reverse,
) as T[]
export const getSumCountry = sumRecords<CountryVirusRecord>(eqDateByDay, ordRecordAt);
export const getProvincesByLastDate = getListRecord(eqProvince, ordProvince);
export const getCountryByLastDate = getListRecord(eqCountry, ordCountry);
export const getCityByLastDate = getListRecord(eqCity, ordCity);

export const getCountryLink = (a: CountryVirusRecord | ProvinceVirusRecord | CityVirusRecord): TLink => ({
    title: a.country,
    href: `/country/[id]`,
    as: `/country/${a.countryId}`
})

export const getProvinceLink = (a: ProvinceVirusRecord | CityVirusRecord): TLink => ({
    title: a.province,
    href: `/province/[id]`,
    as: `/province/${a.provinceId}`
})

export const getCityLink = (a: CityVirusRecord): TLink => ({
    title: a.city,
    href: `/city/[id]`,
    as: `/city/${a.city}`
})
export const getWorldLink = (): TLink => ({ title: '全球', href: '/world' })
export const getLastRecordAtString = (as: VirusRecord[]) =>
    pipe(
        as,
        A.sort(ordRecordAt),
        A.reverse,
        A.head,
        O.map(a => `最后更新时间：${formatDateTime()(a.recordAt)}`),
        O.getOrElse(() => '')
    )
export const standChinaTable = [
    ['recordAt', 'confirmedCount', 'suspectedCount', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'suspectedCountAdd', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate','suspectedCount', 'suspectedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]
export const standTable = [
    ['recordAt', 'confirmedCount', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd','confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]
export const countryTable = [
    ['country', 'confirmedCount', 'deadCount', 'curedCount',],
    ['continents', 'country', 'confirmedCount', 'deadCount', 'curedCount',],
    ['continents', 'country', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount',],
    ['continents', 'country', 'confirmedCount','confirmedCountAddRate', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',],
]

export const provinceTable = [
    ['province', 'confirmedCount', 'deadCount', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedCountAdd','confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]

export const cityTable = [
    ['city', 'confirmedCount', 'deadCount', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedCountAdd','confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]