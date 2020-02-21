import { VRecordInput, VirusRecord, ProvinceVirusRecord, CityVirusRecord, CountryVirusRecord, WorldRecord, CountryInput, VirusInput } from './types'
import * as A from 'fp-ts/lib/Array'
import { contramap, ordNumber, ordDate, ordString, Ord } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'
import { monoidSum, Monoid, getStructMonoid, fold } from 'fp-ts/lib/Monoid'
import * as Eq from 'fp-ts/lib/Eq'
import { notMaybe } from 'macoolka-predicate'
import { formatDate, getDateStart } from '../helper/typeHelper'
import { pick } from 'macoolka-object'
import cuid from 'cuid'
export const commonFields = ['curedCount', 'deadCount', 'suspectedCount', 'confirmedCount', 'recordAt'
]
export const extendsFields = ['confirmedCountAdd', 'confirmedCountAddRate', 'suspectedCountAdd', 'suspectedCountAddRate'
    , 'deadCountAdd', 'deadCountAddRate', 'curedCountAdd', 'curedCountAddRate']

const _defaultValue: VRecordInput = {
    id: '',
    recordAt: new Date(),

   // day: new Date(),
    curedCount: 0,
    deadCount: 0,
    suspectedCount: 0,
    confirmedCount: 0,
}
export const toVRecord = <A extends VRecordInput>(a: A): A => ({
    ...a,
    id: a.id ? a.id : cuid(),
    recordAt: new Date(a.recordAt),
    day: getDateStart(new Date(a.recordAt)),
    curedCount: Number(a.curedCount),
    deadCount: Number(a.deadCount),
    suspectedCount: Number(a.suspectedCount),
    confirmedCount: Number(a.confirmedCount),
})
export const add = <T extends object>(keys: Array<keyof T>) => ([a, b]: [T, T]): any => pipe(
    keys,
    A.reduce({}, (result, key) => ({
        ...result,
        [key + 'Add']: Number(a[key]) - Number(b[key]),
        [key + 'AddRate']: Number(b[key]) === 0 ? 0 : Number(((Number(a[key]) - Number(b[key])) / Number(b[key])).toFixed(4)),
    }))
)
export const toVirusRecords = <T extends VRecordInput>(as: T[]): T[] => {
    if (as.length >= 2) {
        return pipe(
            A.zip(as, [...as.slice(1), _defaultValue]),
            A.map(([a, b]) => ({
                ...a,
                ...add<VRecordInput>(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([a, b])
            }))
        )
    } else if (as.length === 1) {
        return add<VRecordInput>(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([as[0], _defaultValue])
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
export const VirusRecordMonoid = <T extends VRecordInput>(): Monoid<T> => {
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
const mVRecord = getStructMonoid<Omit<VRecordInput, 'recordAt' | 'id' | 'day'>>({
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
const ordProvince = contramap((a: ProvinceVirusRecord) => a.province.title)(ordString)
const eqProvince = Eq.contramap((a: ProvinceVirusRecord) => a.province.title)(Eq.eqString)

const eqCity = Eq.contramap((a: CityVirusRecord) => a.city.title)(Eq.eqString)
const ordCity = contramap((a: CityVirusRecord) => a.city.title)(ordString)
const eqCountry = Eq.contramap((a: CountryVirusRecord) => a.country.title)(Eq.eqString)
const ordCountry = contramap((a: CountryVirusRecord) => a.country.title)(ordString)
const dayEq: Eq.Eq<Date> = {
    equals: (a, b) => {
        return formatDate(a) === formatDate(b)
    }
}
const eqDateByDay = Eq.contramap((a: VirusRecord) => a.recordAt)(dayEq)
export const getWorld = (as: CountryVirusRecord[]): WorldRecord => {
    return pick(fold(VirusRecordMonoid())(as), commonFields) as WorldRecord
}
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

const getGroupRecord = <T extends VirusRecord>(eq: Eq.Eq<T>, ord: Ord<T>) => (as: T[]): T[][] => pipe(
    as,
    A.sort(ord),
    group(eq),
    A.map((b) => pipe(
        b,
        A.sort(ordRecordAt),
        A.reverse,
        toVirusRecords,
    )),

) as T[][]
export const getCountryGroup = getGroupRecord(eqCountry, ordCountry);
export const getProvinceGroup = getGroupRecord(eqProvince, ordProvince);
export const getCityGroup = getGroupRecord(eqCity, ordCity);
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

export const fromJsonToVirus = (v: VirusInput): VirusInput => uniqVirus({
    // world: v.world.map(toVRecord),
    worldRecords: v.worldRecords.map(toVRecord),
    countries: v.countries,
    countryRecords: v.countryRecords.map(toVRecord),
    provinces: v.provinces,
    provinceRecords: v.provinceRecords.map(toVRecord),
    cities: v.cities,
    cityRecords: v.cityRecords.map(toVRecord),
    /*   rumors: v.rumors.map(b => ({
          ...b,
          recordAt: new Date(b.recordAt)
      })),
      newses: v.newses.map(b => ({
          ...b,
          recordAt: new Date(b.recordAt)
      })), */
} as VirusInput) as VirusInput


export const uniqVirus = (a: VirusInput): VirusInput => ({
    ...a,
    countries: pipe(
        a.countries,
        A.uniq({ equals: (a, b) => a.id === b.id || a.title === b.title })
    ),
    cities: pipe(
        a.cities,
        A.uniq({ equals: (a, b) => a.id === b.id || a.title === b.title })
    ),
    provinces: pipe(
        a.provinces,
        A.uniq({ equals: (a, b) => a.id === b.id || a.title === b.title })
    ),
})