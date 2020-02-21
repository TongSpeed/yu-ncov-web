import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { typeDefs } from './type-defs'
import { resolvers } from './resolvers'
import iniData from '../../../ncov.json'
import {foldVirus,fromJsonToVirus,toVirusData} from '../helper'

import {VirusInput} from '../types'
const virusData=fromJsonToVirus(iniData)
const create= (a?:VirusInput)=> {
  
    const data=a?foldVirus([virusData,a]) :virusData
    const virus=toVirusData(data)
  // Check out https://github.com/zeit/next.js/pull/4611 if you want to use the AWSAppSyncClient
  const isBrowser = typeof window !== 'undefined'

  const cache = new InMemoryCache().restore({})

  return new ApolloClient({
    connectToDevTools: isBrowser,
    ssrMode: !isBrowser, // Disables forceFetch on the server (so queries are only run once)
   // link,
    typeDefs: typeDefs,
    resolvers:resolvers(virus),
    uploads:false,
    cache
  } as any)
}
export default create
