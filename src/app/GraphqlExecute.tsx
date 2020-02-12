
import { useQuery } from '@apollo/react-hooks'
import { DocumentNode } from 'graphql';
import React from 'react'
import Loading from 'macoolka-ui-components/lib/Loading'
import Error from 'macoolka-ui-components/lib/Error'
export const GraphqlExecute = <Name extends string, T extends { [key in  Name ]: any },
    Variables extends {}>({ doc, propName, showLoading = false }: {
        doc: DocumentNode,
        propName: Name,
        showLoading?: boolean
    }) => ({ variables, node }: {
        variables: Variables,
        node: (a: T[Name]) => React.ReactNode | React.ReactNodeArray
    }) : React.ReactNode | React.ReactNodeArray => {
            const { data, loading, error } = useQuery<T, Variables>(doc, { variables })
            if (loading) {
                if (showLoading)
                    return <Loading />
                else
                    return <div />
            } else if (error) {
                return <Error title={error.name} content={error.message} />
            }  else if(data){

                return node(data[propName])

            } else{
                return null
            }
        }
export default GraphqlExecute

export const GraphqlExecuteAll = < T extends { [key in  string ]: any },
    Variables extends {}>({ doc,  showLoading = false }: {
        doc: DocumentNode,
        showLoading?: boolean
    }) => ({ variables, node }: {
        variables: Variables,
        node: (a: T) => React.ReactNode | React.ReactNodeArray
    }) : React.ReactNode | React.ReactNodeArray => {
            const { data, loading, error } = useQuery<T, Variables>(doc, { variables })
            if (loading) {
                if (showLoading)
                    return <Loading />
                else
                    return <div />
            } else if (error) {
                return <Error title={error.name} content={error.message} />
            } else if(data){

                return node(data)

            } else{
                return null
            }
        }