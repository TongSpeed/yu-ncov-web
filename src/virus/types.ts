

export type VirusCoreKey = 'curedCount' | 'deadCount' | 'suspectedCount' | 'confirmedCount'
export interface ID {
    id: string;
}
export interface CountryInput extends ID {
   
    continents?: string | null;
    title: string;
}
export interface ProvinceInput extends ID {
  
    country: string,
    title: string;
}
export interface CityInput extends ID {
   
    province: string,
    title: string;
}

export interface VRecordInput extends ID {
    curedCount: number,
    deadCount: number,
    suspectedCount: number,
    confirmedCount: number,
    recordAt: Date,
  
}
export interface WorldRecordInput extends VRecordInput {
 
}
export interface CountryVirusRecordInput extends VRecordInput {
    country: string
  
    //  countryId:string
    //  continents:string
}

export interface ProvinceVirusRecordInput extends VRecordInput {
    //  provinceId:string
    province: string
}

export interface CityVirusRecordInput extends VRecordInput {
    //  cityId:string
    city: string
}


export interface RumorInput extends ID {
    content: string,
    recordAt: Date,
    subTitle: string,
    title: string,
}

export interface NewsInput extends ID {
    title: string
    content: string
    recordAt: Date
    infoSource: string
    province: string
    sourceUrl: string
}

export interface VirusInput {
    worldRecords: WorldRecordInput[]
    countries: CountryInput[]
    provinces: ProvinceInput[]
    cities: CityInput[]
    countryRecords: CountryVirusRecordInput[]
    provinceRecords: ProvinceVirusRecordInput[]
    cityRecords: CityVirusRecordInput[]
    rumors: RumorInput[]
    newses: NewsInput[]
}

export interface CountryData extends ID {
    __typename: 'Country'
    continents?: string | null;
    title: string;
}
export interface ProvinceData extends ID {
    __typename: 'Province'
    country: CountryData,
    title: string;
}
export interface CityData extends ID {
    __typename: 'City'
    province: ProvinceData,
    title: string;
}

export interface RumorData extends RumorInput {
    __typename: 'Rumor'
}

export interface NewsData extends NewsInput {
    __typename: 'News'
}
export interface VRecordNorm {
    deadCountAdd: number
    curedCountAdd: number
    suspectedCountAdd: number
    confirmedCountAdd: number
    deadCountAddRate: number
    suspectedCountAddRate: number
    curedCountAddRate: number
    confirmedCountAddRate: number
}
export type NormKey = 'Add' | 'AddRate'
export type VirusNormKey = keyof VRecordNorm
export interface VirusRecord extends VRecordInput,VRecordNorm {

}
export interface CountryVirusRecord extends VirusRecord {
    __typename: 'CountryRecord',
    country: CountryData

}

export interface ProvinceVirusRecord extends VirusRecord {
    __typename: 'ProvinceRecord'

    province: ProvinceData
}

export interface CityVirusRecord extends VirusRecord {
    city: CityData
    __typename: 'CityRecord'
}


export interface WorldRecord extends VirusRecord {
    __typename:'WorldRecord'
}



export interface VirusData {
    worldRecords: WorldRecord[]
    countries: CountryData[]
    provinces: ProvinceData[]
    cities: CityData[]
    countryRecords: CountryVirusRecord[]
    provinceRecords: ProvinceVirusRecord[]
    cityRecords: CityVirusRecord[]
    rumors: RumorData[]
    newses: NewsData[]
    lastCountryRecords: CountryVirusRecord[]
    lastProvinceRecords: ProvinceVirusRecord[]
    lastCityRecords: CityVirusRecord[]
}
