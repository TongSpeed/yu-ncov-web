// eslint-disable
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run graphql:codegen to update

import * as Types from '../schema-types.generated';

import gql from 'graphql-tag';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';


export type AddressQueryVariables = {
  country?: Types.Maybe<Types.Scalars['String']>,
  province?: Types.Maybe<Types.Scalars['String']>,
  city?: Types.Maybe<Types.Scalars['String']>
};


export type AddressQuery = (
  { __typename?: 'Query' }
  & { countries: Array<(
    { __typename?: 'Country' }
    & Pick<Types.Country, 'id' | 'title' | 'cuid'>
  )>, provinces: Array<(
    { __typename?: 'Province' }
    & Pick<Types.Province, 'id' | 'title' | 'cuid'>
  )>, cities: Array<(
    { __typename?: 'City' }
    & Pick<Types.City, 'id' | 'title' | 'cuid'>
  )>, areas: Array<(
    { __typename?: 'Area' }
    & Pick<Types.Area, 'id' | 'title' | 'cuid'>
  )> }
);


export const AddressDocument = gql`
    query Address($country: String = "cn", $province: String = "", $city: String = "") {
  countries {
    id
    title
    cuid
  }
  provinces(where: {country: {id: {equals: $country}}}) {
    id
    title
    cuid
  }
  cities(where: {province: {id: {equals: $province}}}) {
    id
    title
    cuid
  }
  areas(where: {city: {id: {equals: $city}}}) {
    id
    title
    cuid
  }
}
    `;

/**
 * __useAddressQuery__
 *
 * To run a query within a React component, call `useAddressQuery` and pass it any options that fit your needs.
 * When your component renders, `useAddressQuery` returns an object from Apollo Client that contains loading, error, and data properties 
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAddressQuery({
 *   variables: {
 *      country: // value for 'country'
 *      province: // value for 'province'
 *      city: // value for 'city'
 *   },
 * });
 */
export function useAddressQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<AddressQuery, AddressQueryVariables>) {
        return ApolloReactHooks.useQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
      }
export function useAddressLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<AddressQuery, AddressQueryVariables>) {
          return ApolloReactHooks.useLazyQuery<AddressQuery, AddressQueryVariables>(AddressDocument, baseOptions);
        }
export type AddressQueryHookResult = ReturnType<typeof useAddressQuery>;
export type AddressLazyQueryHookResult = ReturnType<typeof useAddressLazyQuery>;
export type AddressQueryResult = ApolloReactCommon.QueryResult<AddressQuery, AddressQueryVariables>;