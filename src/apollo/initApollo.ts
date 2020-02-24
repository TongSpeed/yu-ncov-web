import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import fetch from 'isomorphic-fetch'
let apolloClient = null
import { HttpLink } from 'apollo-link-http'
function create(initialState?: any) {
    // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
    const isBrowser = typeof window !== 'undefined'

    const link = new HttpLink({
      uri: 'https://yu-ncov-server.now.sh/api',
      credentials: 'same-origin',
      fetch
    })
    
    const cache = new InMemoryCache().restore(initialState || {})
    return new ApolloClient({
        connectToDevTools: isBrowser,
        ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
        link,
        cache,
       
    })

}

export default function initApollo(initialState?: any) {
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
