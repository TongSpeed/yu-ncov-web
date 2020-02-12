
import { useQuery } from '@apollo/react-hooks'
import { DocumentNode } from 'graphql';
import React from 'react'
import Loading from 'macoolka-ui-components/lib/Loading'
import Error from 'macoolka-ui-components/lib/Error'

const Query = <Name extends string, T extends { [key in Name]: any },
    Variables extends {}>({ doc, propName, variables, showLoading = false }: {
        doc: DocumentNode,
        variables?: Variables
        propName: Name,
        showLoading?: boolean,

    }) => (callback: (a: T[Name]) => React.ReactElement): React.ReactElement => {
        const { data, loading, error } = useQuery<T, Variables>(doc, { variables })
        if (loading) {
            if (showLoading)
                return <Loading />
            else
                return <div />
        } else if (error) {
            return <Error title={error.name} content={error.message} />
        } else {

            return callback(data![propName])

        }

    }
export default Query

export const GraphqlExecute = <Name extends string, T extends { [key in Name]: any },
    Variables extends {}>({ doc, propName, showLoading = false }: {
        doc: DocumentNode,
        propName: Name,
        showLoading?: boolean
    }) => ({ variables, node }: {
        variables: Variables,
        node: (a: T[Name]) => React.ReactNode | React.ReactNodeArray
    }) => (
    ): React.ReactNode | React.ReactNodeArray => {
            const { data, loading, error } = useQuery<T, Variables>(doc, { variables })
            if (loading) {
                if (showLoading)
                    return <Loading />
                else
                    return <div />
            } else if (error) {
                return <Error title={error.name} content={error.message} />
            } else {

                return node(data![propName])

            }
        }
