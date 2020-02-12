import { ApolloServer } from 'apollo-server-micro'
import { schema } from '../../server/schema'
import { createContext } from '../../server/context'
import {} from '../'
const apolloServer=new ApolloServer({ schema, context: createContext })
export const config = {
    api: {
      bodyParser: false
    }
  }

export default apolloServer.createHandler({ path: '/api/graphql' })
