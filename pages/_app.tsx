import 'isomorphic-fetch';
import React from 'react';
import App, { AppContext } from 'next/app';
import Root from '../src/app/App'
import { AppProvider } from '../src/app/AppContext'
import Head from 'next/head';
import { ApolloProvider } from '@apollo/react-hooks';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import appOption from '../data'
export let apolloClient: ApolloClient<NormalizedCacheObject> | null = null;
export const initApolloClient =  (initialState = {}) => {
    console.log(process.env.GRAPHQL_URL)
    const link = new HttpLink({
            uri: "/api/graphl" ,
            credentials: 'same-origin',
           
        })

    const createApolloClient = (initialState = {}) => {
        return new ApolloClient({
            ssrMode: typeof window === 'undefined',
            link,
            cache: new InMemoryCache().restore(initialState)
        });
    };
    if (typeof window === 'undefined') {
        return createApolloClient(initialState);
    }

    if (!apolloClient) {
        apolloClient = createApolloClient(initialState);
    }

    return apolloClient;
};

export default class MyApp extends App<{
    apolloState: {}

}> {
    client = apolloClient || initApolloClient(this.props.apolloState);
    render() {
        const { Component, pageProps } = this.props;
        return (<ApolloProvider client={this.client}>
            <AppProvider data={appOption}>
                <Root >
                    <Component {...pageProps} />
                </Root>
            </AppProvider>

        </ApolloProvider>
        );
    }
}
MyApp.getInitialProps = async ({ ctx }: AppContext) => {
    const { AppTree } = ctx;
    apolloClient = initApolloClient();
    let pageProps = {};
    if (typeof window === 'undefined') {
        try {
            const { getDataFromTree } = await import('@apollo/react-ssr');
            await getDataFromTree(
                <AppTree
                    pageProps={{
                        ...pageProps,

                    }}
                />
            );
        } catch (error) {
            console.error('Error while running `getDataFromTree`', error);
        }
        Head.rewind();
    }

    const apolloState = apolloClient.cache.extract();

    return {
        pageProps,
        apolloState,

    }
}

