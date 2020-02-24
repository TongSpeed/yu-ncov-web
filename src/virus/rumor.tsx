import {  TCard } from 'macoolka-model-core'
import { RumorModel,RumorData } from 'yu-ncov-core'
export const RumorCard: TCard<RumorData> = ({
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