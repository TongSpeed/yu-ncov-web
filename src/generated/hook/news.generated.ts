// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import * as Types from '../schema-types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type NewsQueryVariables = {
  skip?: Types.Maybe<Types.Scalars['Int']>,
  first?: Types.Maybe<Types.Scalars['Int']>,
  searchText?: Types.Maybe<Types.Scalars['String']>,
  from?: Types.Maybe<Types.Scalars['DateTime']>,
  to?: Types.Maybe<Types.Scalars['DateTime']>,
  province?: Types.Maybe<Types.Scalars['String']>
};


export type NewsQuery = (
  { __typename?: 'Query' }
  & { news: Array<(
    { __typename?: 'News' }
    & Pick<Types.News, 'id' | 'title' | 'content' | 'province' | 'sourceUrl' | 'infoSource' | 'recordAt'>
  )> }
);


export const NewsDocument = gql`
    query news($skip: Int, $first: Int, $searchText: String, $from: DateTime, $to: DateTime, $province: String) {
  news(first: $first, skip: $skip, where: {recordAt: {gte: $from, lte: $to}, province: {equals: $province}, OR: [{title: {contains: $searchText}, content: {contains: $searchText}, province: {contains: $searchText}, infoSource: {contains: $searchText}}]}, orderBy: {recordAt: desc}) {
    id
    title
    content
    province
    sourceUrl
    infoSource
    recordAt
  }
}
    `;

/**
 * __useNewsQuery__
 *
 * To run a query within a React component, call `useNewsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNewsQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNewsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *      searchText: // value for 'searchText'
 *      from: // value for 'from'
 *      to: // value for 'to'
 *      province: // value for 'province'
 *   },
 * });
 */
export function useNewsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<NewsQuery, NewsQueryVariables>) {
        return ApolloReactHooks.useQuery<NewsQuery, NewsQueryVariables>(NewsDocument, baseOptions);
      }
export function useNewsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<NewsQuery, NewsQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<NewsQuery, NewsQueryVariables>(NewsDocument, baseOptions);
        }
export type NewsQueryHookResult = ReturnType<typeof useNewsQuery>;
export type NewsLazyQueryHookResult = ReturnType<typeof useNewsLazyQuery>;
export type NewsQueryResult = ApolloReactCommon.QueryResult<NewsQuery, NewsQueryVariables>;