
import { CountryRecord,Rumor as _Rumor,News as _News } from '../generated/schema-types.generated'
export type VirusCoreKey = 'curedCount' | 'deadCount' | 'suspectedCount' | 'confirmedCount'
export type Rumor=_Rumor
export type News=_News
export type VRecord = Pick<CountryRecord,
    VirusCoreKey | 'recordAt'>
export interface VRecordNorm {
    deadCountAdd: number
    curedCountAdd: number
    curedAddCountAdd: number
    confirmedCountAdd: number
    deadCountAddRate: number
    curedCountAddRate: number
    curedAddCountAddRate: number
    confirmedCountAddRate: number
}
export type NormKey = 'Add' | 'AddRate'
export interface VirusRecord extends VRecord, VRecordNorm {

}
export interface CountryVirusRecord extends VirusRecord {
    country: string
    countryId:string
    continents:string
}

export interface ProvinceVirusRecord extends CountryVirusRecord {
    provinceId:string
    province: string
}

export interface CityVirusRecord extends ProvinceVirusRecord {
    cityId:string
    city: string
}
export type VirusNormKey = keyof VRecordNorm

