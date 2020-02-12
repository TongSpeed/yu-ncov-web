import React from 'react';
import { ServerStyleSheets } from '@material-ui/styles';
import Document, { Head, Main, NextScript } from 'next/document';
//import postcss from 'postcss';
//import * as prefixer from 'autoprefixer';
//import * as cleanCSS from 'clean-css';
const GOOGLE_ID = process.env.NODE_ENV === 'production' ? 'UA-106598593-2' : 'UA-106598593-3';

export default class MyDocument extends Document<{ canonical: string, userLanguage: string }> {
  render() {
    // const { canonical, userLanguage } = this.props;

    return (
      <html lang={'zh'}>
        <Head>
          {/*
            manifest.json provides metadata used when your web app is added to the
            homescreen on Android. See https://developers.google.com/web/fundamentals/engage-and-retain/web-app-manifest/
          */}
          <link rel="manifest" href="/static/manifest.json" />
          {/* PWA primary color */}

          <link rel="shortcut icon" href="/static/favicon.ico" />
          {/* iOS Icon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/static/icons/180x180.png" />

          <style id="material-icon-font" />
          <style id="font-awesome-css" />
          <style id="app-search" />
          <style id="prismjs" />
          <style id="insertion-point-jss" />
          <link href="/static/chartist.min.css" rel="stylesheet"></link>
          <link href="/static/root.css" rel="stylesheet"></link>
        </Head>
        <body>
          <Main />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `
                window.ga=window.ga||function(){(ga.q=ga.q||[]).push(arguments)};ga.l=+new Date;
                window.ga('create','${GOOGLE_ID}','auto');
              `,
            }}
          />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  // Resolution order
  //
  // On the server:
  // 1. page.getInitialProps
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the server with error:
  // 2. document.getInitialProps
  // 3. page.render
  // 4. document.render
  //
  // On the client
  // 1. page.getInitialProps
  // 3. page.render

  // Render app and page and get the context of the page with collected side effects.
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: App => props => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  let css = sheets.toString();
  //const req=ctx.req
  // const canonical=req && req.url && pathnameToLanguage(req.url).canonical 
  // It might be undefined, e.g. after an error.
  //if (css && process.env.NODE_ENV === 'production') {
  /* const result1 = await prefixer.process(css, { from: undefined });
  css = result1.css;
  css = cleanCSS.minify(css).styles; */
  //}

  return {
    ...initialProps,
    // canonical: canonical,
    // userLanguage: ctx.query.userLanguage || 'en',
    styles: [
      ...React.Children.toArray(initialProps.styles),
      <style
        id="jss-server-side"
        key="jss-server-side"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: css }}
      />,
    ],
  };
};
