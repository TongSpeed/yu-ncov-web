
import { QueryHookOptions, MutationHookOptions, MutationTuple } from '@apollo/react-hooks';
import { QueryResult } from '@apollo/react-common';
export interface TLinkData {
    title: string;
    href?: string;
    as?: string;
}
export type TBasicType='number'|'string'|'datetime'|'boolean'
export type MediaType='xs'|'sm'|'lg'|'xl'
export type ColorEnum = "warning" |
    "success" |
    "danger" |
    "info" |
    "primary" |
    "rose"

export type GridItemValue = false
    | 'auto'
    | true
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
export interface Grid {
    grid?: {

        xs?: GridItemValue,
        sm?: GridItemValue,
        md?: GridItemValue,
        xl?: GridItemValue,
        lg?: GridItemValue,
    }
}
export interface TColor {
    color?: ColorEnum
}
/**
 * Information
 * @desczh
 * 信息
 * @since 0.3.0
 */
export interface TField {
    _type: 'field'
    /**
     * title
     * @desczh
     * 标题
     * @since 0.2.0
     */
    title: string
    shortTitle?:string
    required?: boolean
    id?: boolean
    /**
     * help
     * @desczh
     * 帮助
     * @since 0.2.0
     */
    helperText?: string
    color?:ColorEnum
    name: string
    type: 'string' | 'datetime' | 'int' | 'number' | 'date' | 'boolean' | TModel
    readonly?: boolean
    format?: string
    shortFormat?:string
    defaultValue?: number | string | boolean | 'now' | 'yesterday'
    calculate?: <T>(value: T, values?: T[]) => number | string | boolean
}

export type FormatingFunction<TData> = (a: TData) => React.ReactNode
export type Order = 'asc' | 'desc';
export interface TFormatField<TData = any> extends TField {
    formating?: FormatingFunction<TData>
}
/**
 * Information
 * @desczh
 * 信息
 * @since 0.3.0
 */
export interface TModel<T = {}> {
    _type: 'model'
    name: string
    title: string
    fields: Array<TField & T>
}
export interface TFormatModel<TData> extends TModel {


    fields: Array<TFormatField<TData>>
}
export interface TItem<TData> extends TComponent<TData> {

}

export interface TList<TData> extends TComponent<TData> {
    model?: TFormatModel<TData>,
    ord?: { name: string, order: Order }
}
export interface TKeyCard<TData> extends TColor, LikeCardComponent<TData>, TItem<TData> {
    _type: 'keycard'
}

export type TChartData = {
    labels: string[],
    series: number[][]
}
export interface TChart<TData> extends TList<TData> {
    _type: 'chart'
    lableName: string,
    valueNames: string[],
    hideLabels: boolean[]
    //  maxCount:number[]
    chartType?: "Line" | "Bar" | "Area" | "Point";
}

export type TTableData = { titles: React.ReactNode[], data: React.ReactNode[][] }
export interface TTable<TData> extends TList<TData> {
    _type: 'table'
    names: string[][],
}
export interface TDataContainer<TData> extends TContainer<TData> {
    _type: 'dataList'
}
export interface TContainer<TData> extends TComponent<TData>, LikeCardComponent<TData>, TChild<TData> {
}

export type TFieldValue<TData> =
    | FormatingFunction<TData>
    | { field: string | TFormatField, type: 'label' | 'value',short?:boolean }
    | string

export interface TTextField {
    _type: 'textfield'
    color?: ColorEnum
    field: TField
    textFieldType?: 'datetime' | 'date' | 'time'
    component?: "custom",
    readonly?: boolean
    rows?: number,
    rowsMax?: number,
    fullWidth?: boolean
    query?: {
        useQuery?: (options?: QueryHookOptions) => QueryResult,
        queryName?: string,
        variables?: any
    }
}
export type TChild<TData> = {
    isList?: boolean
    items: Array<TNode<TData>> | TNode<TData>
}
export type TNodeValue<TData> = TNode<TData> | TFieldValue<TData>
export interface LikeCardComponent<TData> {

    title?: TChild<TData>
    subTitle?: TChild<TData>
    footer?: TChild<TData>
    HeadIcon?: React.ComponentType
    InfoIcon?: React.ComponentType
    divider?: 'up' | 'down' | 'left' | 'right'
}
export interface TFieldDisplay<TData = any> extends TComponent<TData> {
    _type: 'field'
    field: TFieldValue<TData>,
    type?: 'paragraph' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'quote' | 'markdown'

}
export interface TCard<TData> extends TContainer<TData> {
    _type: 'card'
    cardType?: 'stand' | 'media' | 'form' | 'article'


}
export interface TComponent<TData> extends TQuery, TColor, Grid {
    model?: TFormatModel<TData>,

    transform?: (a: any) => TData,
}
export interface TQuery {
    query?: {
        useQuery: (options?: QueryHookOptions) => QueryResult,
        queryName?: string,
        infiniteScroll?: boolean,
        variable?: any,
    }


}
export interface TPage<TData> extends TContainer<TData> {
    _type: 'page'
    titles: ((a: TData) => TLinkData[]) | TLinkData[]
}

export interface TLink<TData> extends TLinkData, TComponent<TData> {
    _type: 'link'

}
export interface TRow<TData> extends TContainer<TData> {
    _type: 'row'

}

export type TNode<TData> = TRow<TData> | TKeyCard<TData>
    | TPage<TData> | TChart<TData> | TTable<TData> | TCard<TData> | TFieldDisplay<TData> | TDataContainer<TData> | TLink<TData>