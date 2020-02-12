import React from 'react'
import Loading from 'macoolka-ui-components/lib/Loading'
import Error from 'macoolka-ui-components/lib/Error'
import { TComponent } from '../types'
import InfiniteScroll from 'macoolka-ui-components/lib/InfiniteScroll'

const InfiniteScrollQuery: React.SFC<{
    model: TComponent<any>, 
    callback: (a: any) => React.ReactElement
    value?:any
}> = ({ model: { query }, callback ,value}) => {
    if (query) {
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
                    <InfiniteScroll isLoading={loading} hasMore={hasMore} onLoadMore={() =>
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
                        }
                        )}
                    >
                        {
                            callback(data![queryName])
                        }
                    </InfiniteScroll>
    
                )
            }else{
                return callback(_dataValue)
            }
           

        }else  if (loading) {
            return null
        }
    }else{
       return callback(value)
    }
}

export default InfiniteScrollQuery