import { standChinaTable, standTable ,keys,keysAdd,keysAddRate,fieldLastDate} from './viewHelper'
import Accessibility from "@material-ui/icons/Accessibility";
import * as A from 'fp-ts/lib/Array'
import { pipe } from 'fp-ts/lib/pipeable'
import * as O from 'fp-ts/lib/Option'
import { BasicRecord ,defaultValue, ordRecordAt} from 'yu-ncov-core'
import {notMaybe} from 'macoolka-predicate'
import { getField ,TKeyCard, TChart, TCard, TModel,  TNode} from 'macoolka-model-core'
export const keyCard = ( model: TModel)=>(name: string): TKeyCard<any> => ({
    _type: 'keycard',
    grid: {
        xs: 12,
        sm: 6,
        md: 3,
        lg:3
    },
    HeadIcon: Accessibility,
    title: {
        items: [{
            _type: 'field',
            field: {
                field: name,
                type: 'label',
            }
        }]
    },
    subTitle: {
        items: [{
            _type: 'field',
            field: {
                field: name,
                type: 'value',
            }
        }]
    },
    footer: {
        items: {
            _type: 'field',
            field: a =>notMaybe(a[name + 'Add'])? `比昨日 增加数量:${a[name + 'Add']}`:'无',
            type: 'paragraph'
        }
    },
    color:getField(model)(name).color,
})
//增加比率:${a[name + 'AddRate']
export const chart =( model: TModel)=> (name: string): TCard<any> => ({
    _type: 'card',
    model: BasicRecord,
    grid: {
        xs: 12,
        sm: 12,
        md: 12,
    },

    title: {
        items: [{
            _type: 'field',
            field: {
                field: name,
                type: 'label',
            }
        }]
    },
    color:getField(model)(name).color,
    cardType: 'media',
    subTitle: {
        items: [{
            _type: 'field',
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
    title: {
        items: [{
            _type: 'field',
            field: '关键指标'
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
            A.sort(ordRecordAt),
            A.reverse,
            A.head,
            O.getOrElse(() => defaultValue)
        )
    },
    items: keys(type === 'country').map(keyCard(model))
}, {
    _type: 'row',
    title: {
        items: [{
            _type: 'field',
            field: '疫情标准趋势图'
        }]
    },
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as

        return pipe(
            as,
            A.sort(ordRecordAt),
            A.reverse,
            as => as.slice(0, 31),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keys(type === 'country').map(chart(model))
}, {
    _type: 'row',
    title: {
        items: [{
            _type: 'field',
            field: '疫情增量趋势图'
        }]
    },
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.sort(ordRecordAt),
            A.reverse,
            as => as.slice(0, 31),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keysAdd(type === 'country').map(chart(model))
}, {
    _type: 'row',
    title: {
        items: [{
            _type: 'field',
            field: '疫情增率趋势图'
        }]
    },
    divider: 'down',
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return pipe(
            as,
            A.sort(ordRecordAt),
            A.reverse,
            as => as.slice(0, 31),
            A.reverse,
        )
    },
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: keysAddRate(type === 'country').map(chart(model))
}, {
    _type: 'card',
    title: {
        items: [{
            _type: 'field',
            field: '疫情数据'
        }]
    },
    transform: (as: any[]): any[] => {
        as = getData ? getData(as) : as
        return as
    },
    subTitle: fieldLastDate,
    divider: 'down',
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    items: {
        model,
        _type: 'table',
        ord:{
            name:'recordAt',
            order:'desc'
        },
        names: type === 'country'
            ? standChinaTable : standTable

    }
}]