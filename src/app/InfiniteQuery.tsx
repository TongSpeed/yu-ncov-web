
import { useQuery } from '@apollo/react-hooks'
import { DocumentNode } from 'graphql';
import React from 'react'
import Loading from 'macoolka-ui-components/lib/Loading'
import Error from 'macoolka-ui-components/lib/Error'

import InfiniteScroll from 'macoolka-ui-components/lib/InfiniteScroll'

const InfiniteScrollQuery = <Name extends string, T extends { [key in Name]: { data: any, count: number } },
    Variables extends { first?: number | null | undefined, skip?: number | null | undefined }>
    ({ doc, propName, variables, showLoading = false }: {
        doc: DocumentNode,
        variables?: Variables
        propName: Name,
        showLoading?: boolean,

    }) => (callback: (a: T[Name]) => React.ReactElement): React.ReactElement => {
        const { data, loading, error, fetchMore } = useQuery<T, Variables>(doc, { variables })
        if (loading) {
            if (showLoading)
                return <Loading />
            else
                return <div />
        } else if (error) {
            return <Error title={error.name} content={error.message} />
        } else {

            const value = data![propName].data
            const count = data![propName].count
            const hasMore = value.length < count
            return (
                <InfiniteScroll isLoading={loading} hasMore={hasMore} onLoadMore={() =>
                    fetchMore({
                        variables: {
                            where: {

                                ...variables,

                                first: value.length,
                            },
                        },

                        updateQuery: (prev: any, { fetchMoreResult }) => {
                            if (!fetchMoreResult) return prev;
                            return Object.assign({}, prev, {
                                [propName!]: {
                                    data: [...prev[propName!].data, ...fetchMoreResult[propName!].data],
                                    count: prev[propName!].count
                                }
                            });
                        }
                    }
                    )}
                >
                    {
                        callback(data![propName])
                    }
                </InfiniteScroll>

            )

        }

    }
export default InfiniteScrollQuery