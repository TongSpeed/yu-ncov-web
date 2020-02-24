import React from 'react';
import App from 'next/app';
import Root from '../src/app/App'
import { AppProvider } from '../src/app/AppContext'
import appOption from '../data'

import "perfect-scrollbar/css/perfect-scrollbar.css";
import withApolloClient from '../src/apollo/withApolloClient'
 class MyApp extends App {
 
    render() {
        const { Component, pageProps } = this.props;
        return (  
            <AppProvider data={appOption}>
                <Root >
                    <Component {...pageProps} />
                </Root>
            </AppProvider>
        );
    }
}

export default withApolloClient(MyApp)