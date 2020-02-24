import React from 'react';
import Breadcrumbs from 'macoolka-ui-components/lib/Breadcrumbs';
import { useLink, useAppInfo } from '../app/AppContext'
import Element from 'macoolka-ui-components/lib/Element'
import Head from 'next/head'
import { TLinkData } from 'macoolka-model-core'
export const PageTitle: React.SFC<{ pageTitles: TLinkData[] }> = ({ pageTitles }) => {
  const info = useAppInfo()
  const Link = useLink()
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

          const t = <Element mkTextColor="text.hint" key={title}>{title}</Element>
          return href ? <Link key={title} href={href} as={as}><Element mkCursor="pointer" mkTextColor="text.hint">{t}</Element></Link>
            : t
        })}

      </Breadcrumbs>
    </React.Fragment>
  );


}
export default PageTitle