import { defaultValue, standChinaTable, standTable } from './helper'
import Accessibility from "@material-ui/icons/Accessibility";
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { BasicRecord } from './model'
import { TKeyCard, TChart, TCard, TModel, ColorEnum, TNode } from '../types'
import { formatDateTime } from '../helper/typeHelper'

const keys = (isCountry: boolean = true): { name: string, color: ColorEnum }[] => [{
    name: 'confirmedCount',
    color: 'danger',
}, ...isCountry ? [{
    name: 'suspectedCount',
    color: 'warning',
} as { name: string, color: ColorEnum }] : [],
{
    name: 'deadCount',
    color: 'primary',
}, {
    name: 'curedCount',
    color: 'info',
},]
const keysAdd = (isCountry: boolean = true): { name: string, color: ColorEnum }[] => [{
    name: 'confirmedCountAdd',
    color: 'danger',
}, ...isCountry ? [{
    name: 'suspectedCountAdd',
    color: 'warning',
} as { name: string, color: ColorEnum }] : [],
{
    name: 'deadCountAdd',
    color: 'primary',
}, {
    name: 'curedCountAdd',
    color: 'info',
},]

const keysAddRate = (isCountry: boolean = true): { name: string, color: ColorEnum }[] => [{
    name: 'confirmedCountAddRate',
    color: 'danger',
}, ...isCountry ? [{
    name: 'suspectedCountAddRate',
    color: 'warning',
} as { name: string, color: ColorEnum }] : [],
{
    name: 'deadCountAddRate',
    color: 'primary',
}, {
    name: 'curedCountAddRate',
    color: 'info',
},]
export const keyCard = ({ name, color }: { name: string, color: ColorEnum }): TKeyCard<any> => ({
    _type: 'keycard',
    grid: {
        xs: 12,
        sm: 6,
        md: 3
    },
    HeadIcon: Accessibility,
    title: {
        items:[{
            _type:'field',
            field:{
                field: name,
                type: 'label',
            }
        }]
    },
    subTitle: {
        items:[{
            _type:'field',
            field:{
                field: name,
                type: 'value',
            }
        }]
    },
    footer: {
        items: {
            _type: 'field',
            field: a => `比昨日 增加数量:${a[name + 'Add']}`,
            type: 'paragraph'
        }
    },
    color,
})
//增加比率:${a[name + 'AddRate']
export const chart = ({ name, color }: { name: string, color: ColorEnum }): TCard<any> => ({
    _type: 'card',
    model: BasicRecord,
    grid: {
        xs: 12,
        sm: 12,
        md: 6
    },

    title: {
        items:[{
            _type:'field',
            field:{
                field: name,
                type: 'label',
            }
        }]
    },
    color,
    cardType: 'media',
    subTitle:{
        items:[{
            _type:'field',
            field: _ => "疫情趋势图",
        }]
    },

    items: {
        model: BasicRecord,
        _type: 'chart',
        lableName: 'recordAt',
        valueNames: [name],
        hideLabels: [true, true, false, false]

    } as TChart<any>

})
export const template = (type: 'country' | 'province' | 'city' | 'world', model: TModel, getData?: (a: any) => any): TNode<any>[] => [{
    _type: 'row',
    
    title:{
        items:[{
            _type:'field',
            field:'关键指标'
        }]
    }, 
    divider: 'down',
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    transform: (as: any[]): any => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.reverse,
            A.head,
            O.getOrElse(() => defaultValue)
        )
    },
    items: keys(type === 'country').map(keyCard)
}, {
    _type: 'row',
    title:{
        items:[{
            _type:'field',
            field:'疫情标准统计图'
        }]
    }, 
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.reverse,
            as => as.slice(0, 14),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keys(type === 'country').map(chart)
}, {
    _type: 'row',
    title:{
        items:[{
            _type:'field',
            field:'疫情增量统计图'
        }]
    }, 
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.reverse,
            as => as.slice(0, 14),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keysAdd(type === 'country').map(chart)
}, {
    _type: 'row',
    title:{
        items:[{
            _type:'field',
            field:'疫情增率统计图'
        }]
    }, 
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.reverse,
            as => as.slice(0, 14),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keysAddRate(type === 'country').map(chart)
}, {
    _type: 'card',
    title:{
        items:[{
            _type:'field',
            field:'疫情数据'
        }]
    }, 
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return as
    },
    subTitle:{
        items:[{
            _type:'field',
            field: (data) => data.length > 0 ? formatDateTime()(data[data.length - 1].recordAt) : "",
        }]
    }, 
    divider: 'down',
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: {
        model,
        _type: 'table',
        names: type === 'country'
            ? standChinaTable : standTable

    }
}]