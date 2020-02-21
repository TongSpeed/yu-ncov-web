import {
    VRecordInput, VirusRecord, ProvinceVirusRecord,
    ProvinceInput,CityInput,
    CityVirusRecord, CountryVirusRecord, WorldRecord, CountryInput,
    VirusInput, VRecordNorm, VirusData, CountryData, ProvinceData, CityData, 
    CountryVirusRecordInput, CityVirusRecordInput, ProvinceVirusRecordInput,WorldRecordInput,RumorInput,NewsInput
} from './types'
import * as A from 'fp-ts/lib/Array'
import { contramap, ordNumber, ordDate, ordString, Ord } from 'fp-ts/lib/Ord'
import { pipe } from 'fp-ts/lib/pipeable'
import { monoidSum, Monoid, getStructMonoid, fold } from 'fp-ts/lib/Monoid'
import * as Eq from 'fp-ts/lib/Eq'
import * as O from 'fp-ts/lib/Option'
import { notMaybe, isArray } from 'macoolka-predicate'
import {  getDateStart } from '../helper/typeHelper'
import { pick } from 'macoolka-object'
import cuid from 'cuid'
export const commonFields = ['curedCount', 'deadCount', 'suspectedCount', 'confirmedCount', 'recordAt', 'id'
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
export const ordDeadCount = contramap((a: VRecordInput) => a.deadCount)(ordNumber)
export const ordSuspectedCount = contramap((a: VRecordInput) => a.suspectedCount)(ordNumber)
export const ordConfirmedCount = contramap((a: VRecordInput) => a.confirmedCount)(ordNumber)
export const ordCuredCount = contramap((a: VRecordInput) => a.curedCount)(ordNumber)
export const ordRecordAt = contramap((a: VRecordInput) => new Date(a.recordAt))(ordDate)
export const toVirusRecords = <T extends VRecordInput>(_as: T[]): Array<T & VRecordNorm> => {
    const as = pipe(
        _as,
        A.sort(ordRecordAt),
        A.reverse
    )
    if (as.length >= 2) {
        return pipe(
            A.zip(as, [...as.slice(1), _defaultValue]),
            A.map(([a, b]) => ({
                ...a,
                ...add<VRecordInput>(['deadCount', 'suspectedCount', 'confirmedCount', 'curedCount'])([a, b])
            })),
            // A.reverse
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


export const getWorld = (as: CountryVirusRecordInput[]): WorldRecord => {
    return pick(fold(VirusRecordMonoid())(as), commonFields) as WorldRecord
}



const getVirusRecord = <T extends VRecordInput>(eq: Eq.Eq<T>, ord: Ord<T>) => (as: T[]): Array<T & VRecordNorm> => pipe(
    as,
    A.sort(ord),
    group(eq),
    A.filter(isArray),
    A.map(toVirusRecords),

    A.filter(isArray),
    A.map(A.reverse),
    A.flatten

) as Array<T & VRecordNorm>

export const virusInputEqOrd = {
    ordProvince: contramap((a: ProvinceVirusRecordInput) => a.province)(ordString),
    eqProvince: Eq.contramap((a: ProvinceVirusRecordInput) => a.province)(Eq.eqString),
    eqCity: Eq.contramap((a: CityVirusRecordInput) => a.city)(Eq.eqString),
    ordCity: contramap((a: CityVirusRecordInput) => a.city)(ordString),
    eqCountry: Eq.contramap((a: CountryVirusRecordInput) => a.country)(Eq.eqString),
    ordCountry: contramap((a: CountryVirusRecordInput) => a.country)(ordString),
}
export const getCountryVirusRecord = getVirusRecord(virusInputEqOrd.eqCountry, virusInputEqOrd.ordCountry);
export const getProvincVirusRecord = getVirusRecord(virusInputEqOrd.eqProvince, virusInputEqOrd.ordProvince);
export const getCityVirusRecord = getVirusRecord(virusInputEqOrd.eqCity, virusInputEqOrd.ordCity);

const getLastRecord = <T extends VirusRecord>(eq: Eq.Eq<T>, ord: Ord<T>) => (as: T[]): Array<T> => pipe(
    as,
    A.sort(ord),
    group(eq),
    A.map(A.sort(ordRecordAt)),

    A.map(a => pipe(
        a,
        A.last,
    )),
    A.compact,
    A.sort(ordConfirmedCount),
    A.reverse,
    A.filter(notMaybe)
) as Array<T>
export const virusEqOrd = {
    ordProvince: contramap((a: ProvinceVirusRecord) => a.province.title)(ordString),
    eqProvince: Eq.contramap((a: ProvinceVirusRecord) => a.province.title)(Eq.eqString),
    eqCity: Eq.contramap((a: CityVirusRecord) => a.city.title)(Eq.eqString),
    ordCity: contramap((a: CityVirusRecord) => a.city.title)(ordString),
    eqCountry: Eq.contramap((a: CountryVirusRecord) => a.country.title)(Eq.eqString),
    ordCountry: contramap((a: CountryVirusRecord) => a.country.title)(ordString),
}
//export const getSumCountry = sumRecords<CountryVirusRecord>(eqDateByDay, ordRecordAt);
export const getProvincesByLastDate = getLastRecord(virusEqOrd.eqProvince, virusEqOrd.ordProvince);
export const getCountryByLastDate = getLastRecord(virusEqOrd.eqCountry, virusEqOrd.ordCountry);
export const getCityByLastDate = getLastRecord(virusEqOrd.eqCity, virusEqOrd.ordCity);
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

export const fromVirusToJson = (v: VirusInput): VirusInput => uniqVirus({
    // world: v.world.map(toVRecord),
    worldRecords: v.worldRecords.map(a => pick(a, commonFields)),
    countries: v.countries.map(a => pick(a, ["continents", "title", "id"])),
    countryRecords: v.countryRecords.map(a => pick(a, [...commonFields, 'country'])),
    provinces: v.provinces.map(a => pick(a, ["title", "id", 'country'])),
    provinceRecords: v.provinceRecords.map(a => pick(a, [...commonFields, "province"])),
    cities: v.cities.map(a => pick(a, ["title", "id", 'province'])),
    cityRecords: v.cityRecords.map(a => pick(a, [...commonFields, "city"])),
    rumors: v.rumors.map(a => pick(a, ["title", "id", 'content', 'recordAt', 'subTitle'])),
    newses: v.newses.map(a => pick(a, ["title", "id", 'content', 'recordAt', 'infoSource', 'province', 'sourceUrl'])),
} as VirusInput) as VirusInput

const defaultCountry: CountryData = {
    __typename: 'Country',
    title: '其它',
    id: '',
    continents: '其它'
}

const defaultProvince: ProvinceData = {
    __typename: 'Province',
    title: '其它',
    id: '',
    country: defaultCountry
}

const defaultCity: CityData = {
    __typename: 'City',
    title: '其它',
    id: '',
    province: defaultProvince
}
export const toVirusData = (a: VirusInput): VirusData => {

    const countries: VirusData['countries'] = a.countries.map(b => ({
        ...b,
        __typename: 'Country'
    }));
    const provinces: VirusData['provinces'] = a.provinces.map(b => ({
        ...b,
        __typename: 'Province',
        country: pipe(
            countries,
            A.findFirst(c => c.id === b.country),
            O.getOrElse(() => defaultCountry)
        )
    }));

    const cities: VirusData['cities'] = a.cities.map(b => ({
        ...b,
        __typename: 'City',
        province: pipe(
            provinces,
            A.findFirst(c => c.id === b.province),
            O.getOrElse(() => defaultProvince)
        )
    }));
    const worldRecords: VirusData['worldRecords'] = toVirusRecords(a.worldRecords).map(b => ({
        ...b,
        __typename: 'WorldRecord'
    }));
    const countryRecords: VirusData['countryRecords'] = getCountryVirusRecord(a.countryRecords).map(b => ({
        ...b,
        __typename: 'CountryRecord',
        country: pipe(
            countries,
            A.findFirst(c => c.id === b.country),
            O.getOrElse(() => defaultCountry)
        )
    }));
    const provinceRecords: VirusData['provinceRecords'] = getProvincVirusRecord(a.provinceRecords).map(b => ({
        ...b,
        __typename: 'ProvinceRecord',
        province: pipe(
            provinces,
            A.findFirst(c => c.id === b.province),
            O.getOrElse(() => defaultProvince)
        )
    }));
    const cityRecords: VirusData['cityRecords'] = getCityVirusRecord(a.cityRecords).map(b => ({
        ...b,
        __typename: 'CityRecord',
        city: pipe(
            cities,
            A.findFirst(c => c.id === b.city),
            O.getOrElse(() => defaultCity)
        )
    }));

    return {
        worldRecords,
        countries,
        provinces,
        cities,
        countryRecords,
        provinceRecords,
        cityRecords,
        rumors: a.rumors.map(b => ({
            ...b,
            __typename: 'Rumor',
        })),
        newses: a.newses.map(b => ({
            ...b,
            province: b.province ? b.province : '',
            __typename: 'News',
        })),
        lastCountryRecords: getCountryByLastDate(countryRecords),
        lastCityRecords: getCityByLastDate(cityRecords),
        lastProvinceRecords: getProvincesByLastDate(provinceRecords)
    }
}

export const fromJsonToVirus = (v: any): VirusInput => pipe(
    {
        // world: v.world.map(toVRecord),
        worldRecords: v.worldRecords.map(toVRecord),
        countries: v.countries,
        countryRecords: v.countryRecords.map(toVRecord),
        provinces: v.provinces,
        provinceRecords: v.provinceRecords.map(toVRecord),
        cities: v.cities,
        cityRecords: v.cityRecords.map(toVRecord),
        rumors: (v.rumors ? v.rumors : []).map(b => ({
            ...b,
            recordAt: new Date(b.recordAt)
        })),
        newses: (v.newses ? v.newses : []).map(b => ({
            ...b,
            recordAt: new Date(b.recordAt)
        })),
    },
    uniqVirus,
   
)

export const virusMonoid:Monoid<VirusInput>={
    empty:{
        worldRecords: [],
        countries:[],
        provinces:[],
        cities:[],
        countryRecords:[],
        provinceRecords:[],
        cityRecords:[],
        rumors:[],
        newses:[]
    },
    concat:(b,a)=>{
        const countries=A.union<CountryInput>({equals:(a,b)=>{
            return a.id===b.id ||a.title===b.title
        }})(a.countries,b.countries)
        const provinces=A.union<ProvinceInput>({equals:(a,b)=>{
            return a.id===b.id ||a.title===b.title
        }})(a.provinces,b.provinces)
        const cities=A.union<CityInput>({equals:(a,b)=>{
            return a.id===b.id ||a.title===b.title
        }})(a.cities,b.cities)
        const worldRecords=A.union<WorldRecordInput>({equals:(a,b)=>{
            return getDateStart(a.recordAt).toISOString()===getDateStart(b.recordAt).toISOString()
            
        }})(a.worldRecords,b.worldRecords)
        const countryRecords=A.union<CountryVirusRecordInput>({equals:(a,b)=>{
            return getDateStart(a.recordAt).toISOString()===getDateStart(b.recordAt).toISOString() && a.country===b.country
        
        }})(a.countryRecords,b.countryRecords)
        const provinceRecords=A.union<ProvinceVirusRecordInput>({equals:(a,b)=>{
            return getDateStart(a.recordAt).toISOString()===getDateStart(b.recordAt).toISOString() && a.province===b.province
        
        }})(a.provinceRecords,b.provinceRecords)
        const cityRecords=A.union<CityVirusRecordInput>({equals:(a,b)=>{
            return getDateStart(a.recordAt).toISOString()===getDateStart(b.recordAt).toISOString() && a.city===b.city
        
        }})(a.cityRecords,b.cityRecords)
        const rumors=A.union<RumorInput>({equals:(a,b)=>{
            return  a.title===b.title
        
        }})(a.rumors?a.rumors:[],b.rumors?b.rumors:[])
        const newses=A.union<NewsInput>({equals:(a,b)=>{
            return  a.sourceUrl===b.sourceUrl
        
        }})(a.newses?a.newses:[],b.newses?b.newses:[])
        return {
            worldRecords ,
            countries,
            provinces,
            cities,
            countryRecords,
            provinceRecords,
            cityRecords,
            rumors,
            newses
        }   
    }
   
}
export const foldVirus=fold(virusMonoid)