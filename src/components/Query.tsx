import React from 'react'
import Error from 'macoolka-ui-components/lib/Error'
import { TComponent,convertJsonToArray } from 'macoolka-model-core'
import InfiniteScroll from 'macoolka-ui-components/lib/InfiniteScroll'
import CircularProgress from '@material-ui/core/CircularProgress';
const InfiniteScrollQuery: React.SFC<{
    model: TComponent<any>, 
    callback: (a: any) => React.ReactElement
    value?:any
}> = ({ model: { query,model }, callback ,value}) => {
    if (query) {
        const _callback=(as:any)=>{
             const values=model?convertJsonToArray(model)(as):as
            return callback(values)
        }
        const { infiniteScroll, useQuery, queryName,variable } = query
       
        const { loading, error, data,fetchMore } = useQuery({ variables: variable })
           if (error) {
        
            return <Error title={error.name} content={error.message}></Error>
        }
       
        let hasMore = true
        if (data) {
          
            const _dataValue = queryName ? data[queryName] : data;
             if (infiniteScroll) {
                return (
                    <InfiniteScroll isLoading={loading} hasMore={hasMore} onLoadMore={() =>{
                          fetchMore({
                            variables: {
                                ...variable,
    
                                skip: _dataValue.length,
                            },
    
                            updateQuery: (prev: any, { fetchMoreResult }) => {
                                if (!fetchMoreResult) {
                                    hasMore = false
                                    return prev;
                                }
                                if (fetchMoreResult[queryName!].length === 0) {
                                    hasMore = false
                                    return prev;
                                }
                                
                                    return Object.assign({}, prev, {
                                        [queryName!]: [...prev[queryName!], ...fetchMoreResult[queryName!]],
                                    });
                                
                                
                            }
                        })
                    }
                    }
                        
                    >
                        {
                            _callback(data![queryName])
                        }
                    </InfiniteScroll>
    
                )
            }else{

            return _callback(_dataValue)
            }
           

        }else  if (loading) {
            return <CircularProgress size={32}/>
        }else{
            return <div/>
        }
    }else{
       return callback(value)
    }
}

export default InfiniteScrollQuery