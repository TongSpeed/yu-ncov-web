// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import * as Types from '../schema-types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type CountriesQueryVariables = {};


export type CountriesQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Types.Country, 'id' | 'title' | 'cuid'>
  )> }
);


export const CountriesDocument = gql`
    query Countries {
  countries {
    id
    title
    cuid
  }
}
    `;

/**
 * __useCountriesQuery__
 *
 * To run a query within a React component, call `useCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCountriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCountriesQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
        return ApolloReactHooks.useQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, baseOptions);
      }
export function useCountriesLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<CountriesQuery, CountriesQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<CountriesQuery, CountriesQueryVariables>(CountriesDocument, baseOptions);
        }
export type CountriesQueryHookResult = ReturnType<typeof useCountriesQuery>;
export type CountriesLazyQueryHookResult = ReturnType<typeof useCountriesLazyQuery>;
export type CountriesQueryResult = ApolloReactCommon.QueryResult<CountriesQuery, CountriesQueryVariables>;