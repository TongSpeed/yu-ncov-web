import React from 'react';
import { useLink, useAppInfo } from '../AppContext';
import Element from 'macoolka-ui-components/lib/Element'
export default () => {
  const Link = useLink()
  const {  author ,email} = useAppInfo()
  return (
    <Element mkFlex="rowCenter" mkHeight="appbar" mkPadding="medium" mkCursor="pointer" mkPosition="relative"mkPositionAlign="bottom" mkColor="inherit">
      <Link href={`mailto:${email}`} >
        <Element mkTypography="caption" mkTextColor="inherit" >{author}</Element>
      </Link>
    </Element>
  );
}

