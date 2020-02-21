import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import initApollo from './apollo'
//import fetch from 'unfetch'
export const VirusApp: React.SFC<{}> = ({ children }) => {
  
  const client = initApollo()
  return <ApolloProvider client={client}>
    {children}
  </ApolloProvider>
 
 /*  const { state: { loading, error, data }, callback: setVirus } = useEventCallback<{ loading: boolean, 
    error?: string, data: VirusInput | undefined },
    { loading: boolean, error?: string, data: VirusInput | undefined }>(
      {
        callback: ({ event }) => event,
        initialState: {
          loading: true,
          error: undefined,
          data: undefined
        },
      }) */
  /*  pipe(
    ssrOption,
    O.map(() =>
      pipe(
        getVirus,
        TE.map(data => setVirus({
          loading: false,
          error: undefined,
          data
        })),
        TE.mapLeft(e => {
          setVirus({
            loading: false,
            error: e,
            data: undefined
          })
        })
      )()
    ),
    O.getOrElse(() => null)
  ) */
 
}
export default  VirusApp