import { TModel, TColor } from '../types'
export const BasicValue: TModel<TColor> = {
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [
        {
            name: "confirmedCount",
            title: '确诊病例',
            helperText: "确诊病例数量",
            type: "number",
            defaultValue: 0,
            color: 'danger',
        },
        {
            name: "suspectedCount",
            title: '疑似病例',
            helperText: "新疑似病例数量",
            type: "number",
            defaultValue: 0,
            color: 'warning',
        },

        {
            name: "deadCount",
            title: '死亡病例',
            helperText: "死亡病例数量",
            type: "number",
            defaultValue: 0,
            color: 'primary',
        },
        {
            name: "curedCount",
            title: '治愈病例',
            helperText: "治愈病例数量",
            type: "number",
            defaultValue: 0,
            color: 'info',
        },
    ]
}

export const AddValue: TModel = {
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [
        {
            name: "confirmedCountAdd",
            title: '确诊增量',
            helperText: "确诊病例增加数量",
            type: "number",
            defaultValue: 0
        },
        {
            name: "suspectedCountAdd",
            title: '疑似增量',
            helperText: "疑似病例增加数量",
            type: "number",
            defaultValue: 0
        },

        {
            name: "deadCountAdd",
            title: '死亡增量',
            helperText: "死亡病例增加数量",
            type: "number",
            defaultValue: 0
        },
        {
            name: "curedCountAdd",
            title: '治愈增量',
            helperText: "治愈病例增加数量",
            type: "number",
            defaultValue: 0
        },
    ]
}

export const AddRateValue: TModel = {
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [

        {
            name: "confirmedCountAddRate",
            title: '确诊增率',
            helperText: "确诊病例增加比率",
            type: "number",
            defaultValue: 0
        },

        {
            name: "suspectedCountAddRate",
            title: '疑似增率',
            helperText: "疑似病例增加比率",
            type: "number",
            defaultValue: 0
        },
        {
            name: "deadCountAddRate",
            title: '死亡增率',
            helperText: "死亡病例增加比率",
            type: "number",
            defaultValue: 0
        },
        {
            name: "curedCountAddRate",
            title: '治愈增率',
            helperText: "治愈病例增加比率",
            type: "number",
            defaultValue: 0
        }
    ]
}
export const BasicRecord: TModel = {
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [
        ...BasicValue.fields,
        ...AddValue.fields,
        ...AddRateValue.fields,
        {
            name: "recordAt",
            title: "发生日期",
            helperText: "到当天24点为止",
            type: "date",
            required: true,
            format: 'yyyy年MM月dd日',
            defaultValue: 'yesterday'
        },
        {
            name: "country",
            title: '所在国家',
            helperText: "疫情所在国家",
            required: true,
            type: 'string',
            defaultValue: '中国',
        },
    ]
}
export const CountryRecord: TModel = {
    name: 'CountryRecord',
    title: '国家疫情记录',
    fields: [
        ...BasicRecord.fields,

        {
            name: "continents",
            title: '所在洲',
            helperText: "疫情所在洲",
            type: 'string',
            defaultValue: '亚洲',
        },

    ]
}

export const ProvinceRecord: TModel = {
    name: 'ProvinceRecord',
    title: '省份疫情记录',
    fields: [
        ...CountryRecord.fields

        , {
            name: "province",
            title: '所在省份',
            helperText: "疫情所在省份",
            required: true,
            type: 'string',
            defaultValue: '中国',
        }
    ]
}

export const CityRecord: TModel = {
    name: 'CityRecord',
    title: '城市疫情记录',
    fields: [
        ...ProvinceRecord.fields,
        {
            name: "city",
            title: '所在城市',
            helperText: "疫情所在省份",
            required: true,
            type: 'string',
            defaultValue: '中国',
        },
    ]
}

export const RumorModel: TModel = {
    name: 'Rumor',
    title: '谣言',
    fields: [{
        name: "id",
        title: '主键',
        helperText: "",
        type: 'string',
    },
    {
        name: "title",
        title: '标题',
        helperText: "",
        type: 'string',
    }, {
        name: "subTitle",
        title: '副标题',
        helperText: "",
        type: 'string',
    }, {
        name: "recordAt",
        title: '发布时间',
        helperText: "",
        type: 'datetime',
    }, {
        name: "content",
        title: '内容',
        helperText: "",
        type: 'string',
    },

    ]
}

export const NewsModel: TModel = {
    name: 'News',
    title: '疫情相关新闻',
    fields: [{
        name: "id",
        title: '主键',
        helperText: "",
        type: 'string',
    },
    {
        name: "title",
        title: '标题',
        helperText: "",
        type: 'string',
    }, {
        name: "infoSource",
        title: '来源',
        helperText: "",
        type: 'string',
    }, {
        name: "sourceUrl",
        title: '来源网址',
        helperText: "",
        type: 'string',
    },{
        name: "recordAt",
        title: '发布时间',
        helperText: "",
        type: 'datetime',
    }, {
        name: "content",
        title: '内容',
        helperText: "",
        type: 'string',
    },{
        name: "province",
        title: '地点',
        helperText: "",
        type: 'string',
    },

    ]
}