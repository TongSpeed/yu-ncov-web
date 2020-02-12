import { TCard } from '../types'
import { News } from './types'
import { NewsModel } from './model'
export const RumorCard: TCard<News> = ({
    _type: 'card',
    model: NewsModel,
    
    title:{
        items:[{
            _type:'field',
            field: {
                field: 'title',
                type: 'value'
            },
        }]
    },  
    footer: {
        items: [{
            _type: 'field',
            field: {
                field: 'province',
                type: 'value'
            },
            type: 'paragraph'
        }, {
            _type: 'field',
            field: {
                field: 'recordAt',
                type: 'value'
            },
            type: 'paragraph'
        }, {
            _type: 'field',
            field: {
                field: 'infoSource',
                type: 'value'
            },
            type: 'paragraph'
        }]
    },
    items: [{
        _type: 'field',
        type: 'markdown',
        field: {
            field: 'content',
            type: 'value'
        }
    }]
})
export default RumorCard