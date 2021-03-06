// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import * as Types from '../schema-types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type RumorsQueryVariables = {
  skip?: Types.Maybe<Types.Scalars['Int']>,
  first?: Types.Maybe<Types.Scalars['Int']>
};


export type RumorsQuery = (
  { __typename?: 'Query' }
  & { rumors: Array<(
    { __typename?: 'Rumor' }
    & Pick<Types.Rumor, 'id' | 'title' | 'content' | 'subTitle' | 'recordAt'>
  )> }
);


export const RumorsDocument = gql`
    query Rumors($skip: Int, $first: Int) {
  rumors(first: $first, skip: $skip) {
    id
    title
    content
    subTitle
    recordAt
  }
}
    `;

/**
 * __useRumorsQuery__
 *
 * To run a query within a React component, call `useRumorsQuery` and pass it any options that fit your needs.
 * When your component renders, `useRumorsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRumorsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useRumorsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<RumorsQuery, RumorsQueryVariables>) {
        return ApolloReactHooks.useQuery<RumorsQuery, RumorsQueryVariables>(RumorsDocument, baseOptions);
      }
export function useRumorsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<RumorsQuery, RumorsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<RumorsQuery, RumorsQueryVariables>(RumorsDocument, baseOptions);
        }
export type RumorsQueryHookResult = ReturnType<typeof useRumorsQuery>;
export type RumorsLazyQueryHookResult = ReturnType<typeof useRumorsLazyQuery>;
export type RumorsQueryResult = ApolloReactCommon.QueryResult<RumorsQuery, RumorsQueryVariables>;