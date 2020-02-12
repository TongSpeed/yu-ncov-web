import React from 'react';
import Breadcrumbs from 'macoolka-ui-components/lib/Breadcrumbs';
import { useLink, usePageTitles,useAppInfo } from '../AppContext'
import Element from 'macoolka-ui-components/lib/Element'
import Head from 'next/head'
import { a as A } from 'macoolka-ui-components/lib/Html'
export default function AppHeader() {
   const info = useAppInfo()
  const Link = useLink()
  const pageTitles = usePageTitles();
   //React.use
  const title = pageTitles.reduce((b, a) => {
    return `${a.title}_${b}`
  }, info.title)
   
    return (
    <React.Fragment>

 < Head >
    <title>{title}</title>
  </Head > 
      <Breadcrumbs maxItems={5} aria-label="breadcrumb" color='inherit'>
        {pageTitles.map(({ title, href, as }: any) => {

          const t = <Element mkColor="inherit" key={title}>{title}</Element>
          return href ? <Link key={title} href={href} as={as}><Element mkCursor="pointer" mkColor="inherit">{t}</Element></Link>
            : t
        })}

      </Breadcrumbs>
    </React.Fragment>
  );


}