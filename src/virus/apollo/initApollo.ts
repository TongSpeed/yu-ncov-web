import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import iniData from '../../../ncov.json'

import {fromJsonToVirus,toVirusData} from '../helper'
const virusData=toVirusData(fromJsonToVirus(iniData))
let apolloClient = null

function create (initialState?:any) {
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'

    const cache = new InMemoryCache().restore(initialState || {})
    return new ApolloClient({
      connectToDevTools: isBrowser,
      ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
     // link,
      typeDefs: typeDefs,
      resolvers:resolvers(virusData),
      uploads:false,
      cache
    } as any)
  
}

export default function initApollo (initialState?:any) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (typeof window === 'undefined') {
    return create(initialState)
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
