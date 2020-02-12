import {  TCard } from '../types'
import { Rumor } from './types'
import { RumorModel } from './model'
export const RumorCard: TCard<Rumor> = ({
    _type: 'card',
    cardType:'article',
    model: RumorModel,
    title: {
        items:[{
            _type:'field',
            field:    {
                field: 'title',
                type: 'value'
            },
        }]
    }, 
    subTitle:{
        items:[{
            _type:'field',
            field:     {
                field: 'subTitle',
                type: 'value'
            },
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