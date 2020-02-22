import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import {  CountryInput,CityVirusRecordInput,ProvinceVirusRecordInput,CountryVirusRecordInput,
    VirusInput } from '../src/virus/types'

export const virusStore = (v: VirusInput) => {
   
    const getCountry = (id: string) => {
        return pipe(
            v.countries,
            A.findFirst(a => a.id === id)
        )
    }
    const getCountryByTitle = (title: string) => {
        return pipe(
            v.countries,
            A.findFirst(a => a.title === title)
        )
    }
    const getProvince = (id: string) => {
        return pipe(
            v.provinces,
            A.findFirst(a => a.id === id)
        )
    }
    const getProvinceByTitle = (title: string) => {
        return pipe(
            v.provinces,
            A.findFirst(a => a.title === title)
        )
    }
    const getCity = (id: string) => {
        return pipe(
            v.cities,
            A.findFirst(a => a.id === id)
        )
    }
    const getCityByTitle = (title: string) => {
        return pipe(
            v.cities,
            A.findFirst(a => a.title === title)
        )
    }
    const getCountryRecords = (id: string) => {
        return pipe(
            v.countryRecords,
            A.filter(a => a.country === id)
        )
    }
    const getCountryRecordsByTitle = (title: string) => {
        return pipe(
            v.countries,
            A.findFirst(a => a.title === title),
            O.map((a: CountryInput) => getCountryRecords(a.id)),
            O.getOrElse(() => [] as CountryVirusRecordInput[])
        )
    }
    const getProvinceRecords = (id: string) => {
        return pipe(
            v.provinceRecords,
            A.filter(a => a.province === id)
        )
    }
    const getProvinceRecordsByTitle = (title: string) => {
        return pipe(
            v.provinces,
            A.findFirst(a => a.title === title),
            O.map((a) => getProvinceRecords(a.id)),
            O.getOrElse(() => [] as ProvinceVirusRecordInput[])
        )
    }
    const getCityRecords = (id: string) => {
        return pipe(
            v.cityRecords,
            A.filter(a => a.city === id)
        )
    }
    const getCityRecordsByTitle = (title: string) => {
        return pipe(
            v.cities,
            A.findFirst(a => a.title === title),
            O.map((a) => getCityRecords(a.id)),
            O.getOrElse(() => [] as CityVirusRecordInput[])
        )
    }
    return {
        getCountry,
        getCountryByTitle,
        getProvince,
        getProvinceByTitle,
        getCity,
        getCityByTitle,
        getCountryRecords,
        getCountryRecordsByTitle,
        getProvinceRecords,
        getProvinceRecordsByTitle,
        getCityRecords,
        getCityRecordsByTitle,
    }
}
export default virusStore