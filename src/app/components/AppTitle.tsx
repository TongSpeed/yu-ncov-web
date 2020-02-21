import React from 'react';
import { useLink, useAppInfo } from '../AppContext';
import Element from 'macoolka-ui-components/lib/Element'
import { img as Img } from 'macoolka-ui-components/lib/Html'
export default () => {
  const Link = useLink()
  const { title, href, as, logo } = useAppInfo()
  return (
    <Element mkFlex="rowCenter" mkHeight="bar_large" mkPadding="medium" mkCursor="pointer" mkAbsolute="top" mkColor="inherit">
      <Img mkMarginLeft="medium" src={logo} mkWidth="element_small" mkHeight="element_small" />
      <Link href={href} as={as} >
        <Element mkTypography="h6" mkTextColor="inherit" mkMarginLeft="medium">{title}</Element>
      </Link>
    </Element>
  );
}

