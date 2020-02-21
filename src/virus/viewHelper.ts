import { VRecordInput } from './types'
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import { formatDateTime } from '../helper/typeHelper'
import { TLinkData } from '../types'
import { ordRecordAt } from './helper'
import * as O from 'fp-ts/lib/Option'

export const getCountryLink = (a: { country: { id: string, title: string } }): TLinkData => ({
    title: a.country.title,
    href: `/country/[id]`,
    as: `/country/${a.country.id}`
})

export const getProvinceLink = (a: { province: { id: string, title: string } }): TLinkData => ({
    title: a.province.title,
    href: `/province/[id]`,
    as: `/province/${a.province.id}`
})

export const getCityLink = (a: { city: { id: string, title: string } }): TLinkData => ({
    title: a.city.title,
    href: `/city/[id]`,
    as: `/city/${a.city.id}`
})
export const getWorldLink = (): TLinkData => ({ title: '全球', href: '/world' })
export const getLastRecordAtString = <A extends VRecordInput>(as: A[]) =>
    pipe(
        as,
        A.sort(ordRecordAt),
        A.reverse,
        A.head,
        O.map(a => `最后更新时间：${formatDateTime()(a.recordAt)}`),
        O.getOrElse(() => '')
    )

export const keys = (isCountry: boolean = true): string[] => {
    return isCountry 
    ? ['confirmedCount', 'suspectedCount', 'deadCount', 'curedCount', 'confirmedNowCount', 'deadRate', 'curedRate'] :
      ['confirmedCount', 'deadCount', 'curedCount', 'confirmedNowCount', 'deadRate', 'curedRate']
}
export const keysAdd = (isCountry: boolean = true): string[] => {
    return isCountry 
    ? ['confirmedCountAdd', 'suspectedCountAdd', 'deadCountAdd', 'curedCountAdd'] 
    : ['confirmedCountAdd', 'deadCountAdd', 'curedCountAdd']
}
export const keysAddRate = (isCountry: boolean = true): string[] => {
    return isCountry 
    ? ['confirmedCountAddRate', 'suspectedCountAddRate', 'deadCountAddRate', 'curedCountAddRate']
     : ['confirmedCountAddRate', 'deadCountAddRate', 'curedCountAddRate']
}
export const standChinaTable = [
    ['recordAt', 'confirmedCount',  'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'suspectedCount', 'suspectedCountAdd', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'confirmedCountAddRate', 'suspectedCount',
    'confirmedNowCount', 'deadRate', 'curedRate', 'suspectedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]
export const standTable = [
    ['recordAt', 'confirmedCount', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['recordAt', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['recordAt', 'confirmedCount','confirmedNowCount', 'deadRate', 'curedRate', 'confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]
export const countryTable = [
    ['country', 'confirmedCount', 'deadCount', 'curedCount',],
    ['country.continents', 'country', 'confirmedCount', 'deadCount', 'curedCount',],
    ['country.continents', 'country', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount',],
    ['country.continents', 'country', 'confirmedCount','confirmedNowCount', 'deadRate', 'curedRate', 'confirmedCountAddRate', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',],
]

export const provinceTable = [
    ['province', 'confirmedCount', 'deadCount', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['province', 'confirmedCount', 'confirmedNowCount', 'deadRate', 'curedRate','confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]

export const cityTable = [
    ['city', 'confirmedCount', 'deadCount', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedCountAdd', 'deadCount', 'deadCountAdd', 'curedCount'],
    ['city', 'confirmedCount', 'confirmedNowCount', 'deadRate', 'curedRate','confirmedCountAdd', 'confirmedCountAddRate', 'deadCount', 'deadCountAdd', 'curedCount', 'curedCountAdd',]
]

