import { TModel, TColor } from '../types'
export const BasicValue: TModel<TColor> = {
    name: 'BasicRecord',
    _type: 'model',
    title: '疫情记录',
    fields: [
        {
            _type: 'field',
            name: "confirmedCount",
            title: '确诊病例',
            shortTitle:'确诊',
            helperText: "确诊病例数量",
            type: "int",
            defaultValue: 0,
            color: 'danger',
        },
        {
            _type: 'field',
            name: "suspectedCount",
            title: '疑似病例',
            shortTitle:'疑似',
            helperText: "新疑似病例数量",
            type: "int",
            defaultValue: 0,
            color: 'warning',
        },

        {
            _type: 'field',
            name: "deadCount",
            title: '死亡病例',
            shortTitle:'死亡',
            helperText: "死亡病例数量",
            type: "int",
            defaultValue: 0,
            color: 'primary',
        },
        {
            _type: 'field',
            name: "curedCount",
            title: '治愈病例',
            shortTitle:'治愈',
            helperText: "治愈病例数量",
            type: "int",
            defaultValue: 0,
            color: 'info',
        },
        {
            _type: 'field',
            name: "curedRate",
            title: '治愈率',

            type: "number",
            color: 'info',
            format: 'percent',
            calculate:(a:any)=>a.curedCount/a.confirmedCount
        },
        {
            _type: 'field',
            name: "deadRate",
            title: '死亡率',
           
            type: "number",
            color: 'primary',
            format: 'percent',
            calculate:(a:any)=>a.deadCount/a.confirmedCount
        },{
            _type: 'field',
            name: "confirmedNowCount",
            title: '现有确诊',
            shortTitle:'现确诊',
            type: "int",
            color: 'danger',
            calculate:(a:any)=>a.confirmedCount-a.curedCount-a.deadCount
        },
    ]
}

export const AddValue: TModel = {
    _type:'model',
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [
        {
            _type: 'field',
            name: "confirmedCountAdd",
            title: '确诊增量',
            shortTitle:'确诊增',
            helperText: "确诊病例增加数量",
            type: "int",
            defaultValue: 0,
            color: 'danger',
        },
        {
            _type: 'field',
            name: "suspectedCountAdd",
            title: '疑似增量',
            shortTitle:'疑似增',
            helperText: "疑似病例增加数量",
            type: "int",
            defaultValue: 0,
            color: 'warning',
        },

        {
            _type: 'field',
            name: "deadCountAdd",
            title: '死亡增量',
            shortTitle:'死亡增',
            helperText: "死亡病例增加数量",
            type: "int",
            defaultValue: 0,
            color: 'primary',
        },
        {
            _type: 'field',
            name: "curedCountAdd",
            title: '治愈增量',
            shortTitle:'治愈增',
            helperText: "治愈病例增加数量",
            type: "int",
            defaultValue: 0,
            color: 'info',
        },
    ]
}

export const AddRateValue: TModel = {
    _type:'model',
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [

        {
            _type: 'field',
            name: "confirmedCountAddRate",
            title: '确诊增率',
            
            helperText: "确诊病例增加比率",
            type: "number",
            defaultValue: 0,
            color: 'danger',
            format: 'percent',
        },

        {
            _type: 'field',
            name: "suspectedCountAddRate",
            title: '疑似增率',
            helperText: "疑似病例增加比率",
            type: "number",
            defaultValue: 0,
            color: 'warning',
            format: 'percent',
        },
        {
            _type: 'field',
            name: "deadCountAddRate",
            title: '死亡增率',
            helperText: "死亡病例增加比率",
            type: "number",
            defaultValue: 0,
            color: 'primary',
            format: 'percent',
        },
        {
            _type: 'field',
            name: "curedCountAddRate",
            title: '治愈增率',
            helperText: "治愈病例增加比率",
            type: "number",
            defaultValue: 0,
            color: 'info',
            format: 'percent',
        }
    ]
}
export const BasicRecord: TModel = {
    _type:'model',
    name: 'BasicRecord',
    title: '疫情记录',
    fields: [
        ...BasicValue.fields,
        ...AddValue.fields,
        ...AddRateValue.fields,
        {
            _type: 'field',
            name: "recordAt",
            title: "发生日期",
            shortTitle:'日期',
            helperText: "到当天24点为止",
            type: "date",
            required: true,
            format: 'yyyy年MM月dd日',
            shortFormat:'MM月dd日',
            defaultValue: 'yesterday'
        },
        /*   {
              name: "country",
              title: '所在国家',
              helperText: "疫情所在国家",
              required: true,
              type: 'string',
              defaultValue: '中国',
          }, */
    ]
}

export const Country: TModel = {
    _type: 'model',
    name: 'CountryRecord',
    title: '国家疫情记录',

    fields: [
        {
            _type: 'field',
            name: "id",
            title: '主健',
            required: true,
            type: 'string',
        },
        {
            _type: 'field',
            name: "title",
            title: '国家',
            type: 'string',

        },

        {
            _type: 'field',
            name: "continents",
            title: '所在洲',
            shortTitle:'洲',
            helperText: "疫情所在洲",
            type: 'string',
            defaultValue: '亚洲',
        },

    ]
}

export const Province: TModel = {
    _type: 'model',
    name: 'Province',
    title: '省份',
    fields: [
        {
            _type: 'field',
            name: "id",
            title: '主健',
            required: true,
            type: 'string',
        }

        , {
            _type: 'field',
            name: "title",
            title: '省份',
            required: true,
            type: 'string',
        }
    ]
}

export const City: TModel = {
    _type: 'model',
    name: 'Province',
    title: '城市',
    fields: [
        {
            _type: 'field',
            name: "id",
            title: '主健',
            required: true,
            type: 'string',
        }

        , {
            _type: 'field',
            name: "title",
            title: '城市',
            required: true,
            type: 'string',
        }
    ]
}
export const CountryRecord: TModel = {
    _type:'model',
    name: 'CountryRecord',
    title: '国家疫情记录',
    fields: [
        ...BasicRecord.fields,

        {
            _type:'field',
            name: "country",
            title: '国家',
            type: Country,
        },

    ]
}

export const ProvinceRecord: TModel = {
    _type:'model',
    name: 'ProvinceRecord',
    title: '省份疫情记录',
    fields: [
        ...BasicRecord.fields

        , {
            _type:'field',
            name: "province",
            title: '所在省份',
            shortTitle:'省份',
            type: Province,
        }
    ]
}
export const CityRecord: TModel = {
    _type:'model',
    name: 'CityRecord',
    title: '城市疫情记录',
    fields: [
        ...ProvinceRecord.fields,
        {
            _type:'field',
            name: "city",
            title: '所在城市',
            shortTitle:'城市',
            type: City,
        },
    ]
}

export const RumorModel: TModel = {
    _type:'model',
    name: 'Rumor',
    title: '谣言',
    fields: [{
        _type:'field',
        name: "id",
        title: '主键',
        helperText: "",
        type: 'string',
    },
    {
        _type:'field',
        name: "title",
        title: '标题',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "subTitle",
        title: '副标题',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "recordAt",
        title: '发布时间',
        helperText: "",
        type: 'datetime',
    }, {
        _type:'field',
        name: "content",
        title: '内容',
        helperText: "",
        type: 'string',
    },

    ]
}

export const NewsModel: TModel = {
    _type:'model',
    name: 'News',
    title: '疫情相关新闻',
    fields: [{
        _type:'field',
        name: "id",
        title: '主键',
        helperText: "",
        type: 'string',
    },
    {
        _type:'field',
        name: "title",
        title: '标题',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "infoSource",
        title: '来源',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "sourceUrl",
        title: '来源网址',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "recordAt",
        title: '发布时间',
        helperText: "",
        type: 'datetime',
    }, {
        _type:'field',
        name: "content",
        title: '内容',
        helperText: "",
        type: 'string',
    }, {
        _type:'field',
        name: "province",
        title: '地点',
        helperText: "",
        type: 'string',
    },

    ]
}