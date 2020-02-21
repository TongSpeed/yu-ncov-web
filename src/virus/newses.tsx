import { useNewsQuery, NewsQuery,NewsQueryVariables } from '../generated/hook/news.generated'
import { TRow,TCard } from '../types'
import { NewsInput, } from './types'
import { NewsModel } from './model'
import newsCard from './newsCard'
export const rumors = (variable: NewsQueryVariables): TRow<NewsInput[]> => ({
    _type: 'row',
    model:NewsModel,
    query: {
        useQuery: useNewsQuery,
        queryName: "news",
        infiniteScroll:true,
        variable
    },

    title:{
        items:[{
            _type:'field',
            field:  "疫情新闻"
        }]
    }, 
    grid: {
        xs: 12,
        sm: 12,
        md: 12
    },
    isList:true,
    transform: (as: NewsQuery['news']): NewsInput[] => {
        return as
       
    },
    items: {
        ...newsCard,
        grid: {
            xs: 12,
            sm: 12,
            md: 6
        },

    } as TCard<any>
});
export default rumors