
import * as A from 'fp-ts/lib/Array'

import * as O from 'fp-ts/lib/Option'
import { pipe } from 'fp-ts/lib/pipeable'
import { pick } from 'macoolka-object'
import cuid from 'cuid'
import * as V from '../src/virus/types'
import { commonFields, getWorld } from '../src/virus/helper'
import  virusStore  from './virtusHelper'

export const toVRecord = <A extends any>(a: A): A => ({
    ...a,
    recordAt: new Date(a.recordAt),
    curedCount: Number(a.curedCount),
    deadCount: Number(a.deadCount),
    suspectedCount: Number(a.suspectedCount),
    confirmedCount: Number(a.confirmedCount),
})
export const toNCOVRecordFromJson=(a:NCOVRecord):NCOVRecord=>({
    countries: a.countries.map(toVRecord),
    provinces: a.provinces.map(toVRecord),
    cities:a.cities.map(toVRecord),
    rumors: a.rumors,
    newses: a.newses
})

export interface BasicRecord {
    suspectedCount: number,
    confirmedCount: number,
    curedCount: number,
    deadCount: number,
    recordAt: Date
}
export interface CountryRecord extends BasicRecord {
    seriousCount?: number,
    suspectedAddCount?: number,
    confirmedAddCount?: number,
    seriousAddCount?: number,
    curedAddCount?: number,
    deadAddCount?: number,
    country: string,
    continents: string,
}

export interface ProvinceRecord extends BasicRecord {

    country: string,
    province: string
}

export interface CityRecord extends BasicRecord {
    country: string,
    province: string,
    city: string,
}
export interface NCOVRecord {
    countries: CountryRecord[],
    provinces: ProvinceRecord[],
    cities: CityRecord[]
    rumors: Rumor[]
    newses: News[]
}

interface Rumor {

    title: string
    subTitle: string
    content: string
    recordAt: Date
}
interface News {

    title: string
    content: string
    recordAt: Date
    infoSource: string
    province: string
    sourceUrl: string
}
const getCommonValue=(a:BasicRecord):V.VRecordInput=>({
    ...pick(a, commonFields),
    id:cuid(),
} as V.VRecordInput)
const errorChar = '�'
const newsError = (a: News) => {
    return !(a.title.indexOf(errorChar) >= 0
        || a.content.indexOf(errorChar) >= 0
        || a.infoSource.indexOf(errorChar) >= 0
        || a.sourceUrl.indexOf(errorChar) >= 0)
}
const rumorError = (a: Rumor) => {
    return !(a.title.indexOf(errorChar) >= 0
        || a.content.indexOf(errorChar) >= 0
        || a.subTitle.indexOf(errorChar) >= 0)
}
const countryRecordError = (a: CountryRecord) => {
    return !(a.country.indexOf(errorChar) >= 0
        || a.continents.indexOf(errorChar) >= 0)
}

const provinceRecordError = (a: ProvinceRecord) => {
    return !(a.country.indexOf(errorChar) >= 0
        || a.province.indexOf(errorChar) >= 0)
}

const cityRecordError = (a: CityRecord) => {
    return !(a.country.indexOf(errorChar) >= 0
        || a.province.indexOf(errorChar) >= 0
        || a.city.indexOf(errorChar) >= 0)
}
const dxyToVirusInput = (v: V.VirusInput) => (_data: NCOVRecord) :V.VirusInput=> {

    const data = {
        countries: _data.countries.filter(countryRecordError),
        provinces: _data.provinces.filter(provinceRecordError),
        cities: _data.cities.filter(cityRecordError),
        rumors: _data.rumors.filter(rumorError),
        newses: _data.newses.filter(newsError),
    }
    const store = virusStore(v)
    let countries: V.CountryInput[] = []
    let provinces: V.ProvinceInput[] = []
    let cities: V.CityInput[] = []
    const countryRecords:V.CountryVirusRecordInput[] = data.countries.map(a => ({
        ...getCommonValue(a),
        country: pipe(
            store.getCountryByTitle(a.country),
            O.map(a => a.id),
            O.getOrElse(() => {
                const newCountry = {
                    id: cuid(),
                    title: a.country,
                    continents: a.continents
                }
                countries.push(newCountry)
                return newCountry.id
            })
        )
    }))

    const provinceRecords:V.ProvinceVirusRecordInput[] = data.provinces.map(value => ({
        ...getCommonValue(value),
        province: pipe(
            store.getProvinceByTitle(value.province),
            O.map(a => a.id),
            O.getOrElse(() => {
                value.country
               const country= pipe(
                [...countries,...v.countries],
                    A.findFirst(a => a.title === value.country),
                    O.map(a => a.id),
                    O.getOrElse(() =>{
                        return `country not found ${value.country}`
  
                    })
                )
                const newProvince = {
                    id: cuid(),
                    title: value.province,
                    country
                }
                provinces.push(newProvince)
                return newProvince.id
            })
        )
    }))
    const cityRecords:V.CityVirusRecordInput[]  = data.cities.map(value => ({
        ...getCommonValue(value),
        city: pipe(
            store.getCityByTitle(value.city),
            O.map(a => a.id),
            O.getOrElse(() => {
            
              
                const province= pipe(
                    [...provinces,...v.provinces],
                    
                    A.findFirst(a => a.title === value.province),
                    O.map(a => a.id),
                    O.getOrElse(() =>{
                        return `provonce not found ${value.province}`

                    })
                )
                const newCity = {
                    id: cuid(),
                    title: value.city,
                    province
                }
                cities.push(newCity)
                return newCity.id
            })
        )
    }))
     const world = getWorld(countryRecords)
    return {
        worldRecords: [world],
        countries,
        provinces,
        cities,
        countryRecords,
        provinceRecords,
        cityRecords,
        rumors: data.rumors.map(a=>({
            ...a,
            id:cuid()
        })),
        newses: data.newses.map(a=>({
            ...a,
            id:cuid()
        })),
    }
}
export default dxyToVirusInput
