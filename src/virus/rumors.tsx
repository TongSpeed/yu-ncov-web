import { useRumorsQuery, RumorsQuery,RumorsQueryVariables } from '../generated/hook/rumors.generated'
import { TRow,TCard } from '../types'
import { Rumor, } from './types'
import { RumorModel } from './model'
import RumorCard from './rumor'
export const rumors = (variable: RumorsQueryVariables): TRow<Rumor[]> => ({
    _type: 'row',
    model:RumorModel,
    query: {
        useQuery: useRumorsQuery,
        queryName: "rumors",
        infiniteScroll:true,
        variable
    },

    title:{
        items:[{
            _type:'field',
            field:  "流言粉碎机"
        }]
    }, 
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    isList:true,
    transform: (as: RumorsQuery['rumors']): Rumor[] => {
        return as
       
    },
    items: {
        ...RumorCard,
        grid: {
            xs: 12,
            sm: 12,
            md: 6
        },

    } as TCard<any>
});
export default rumors