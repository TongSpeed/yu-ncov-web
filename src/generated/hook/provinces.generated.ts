// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import * as Types from '../schema-types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type ProvincesQueryVariables = {
  country: Types.Scalars['String']
};


export type ProvincesQuery = (
  { __typename?: 'Query' }
  & { provinces: Array<(
    { __typename?: 'Province' }
    & Pick<Types.Province, 'id' | 'title' | 'cuid'>
  )> }
);


export const ProvincesDocument = gql`
    query provinces($country: String!) {
  provinces(where: {country: {id: {equals: $country}}}) {
    id
    title
    cuid
  }
}
    `;

/**
 * __useProvincesQuery__
 *
 * To run a query within a React component, call `useProvincesQuery` and pass it any options that fit your needs.
 * When your component renders, `useProvincesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useProvincesQuery({
 *   variables: {
 *      country: // value for 'country'
 *   },
 * });
 */
export function useProvincesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<ProvincesQuery, ProvincesQueryVariables>) {
        return ApolloReactHooks.useQuery<ProvincesQuery, ProvincesQueryVariables>(ProvincesDocument, baseOptions);
      }
export function useProvincesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<ProvincesQuery, ProvincesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<ProvincesQuery, ProvincesQueryVariables>(ProvincesDocument, baseOptions);
        }
export type ProvincesQueryHookResult = ReturnType<typeof useProvincesQuery>;
export type ProvincesLazyQueryHookResult = ReturnType<typeof useProvincesLazyQuery>;
export type ProvincesQueryResult = ApolloReactCommon.QueryResult<ProvincesQuery, ProvincesQueryVariables>;