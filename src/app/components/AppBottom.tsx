import React from 'react';
import { useLink, useAppInfo } from '../AppContext';
import Element from 'macoolka-ui-components/lib/Element'
export default () => {
  const {  author ,email} = useAppInfo()
  return (
    <Element mkFlex="column" mkHeight="appbar" mkPadding="medium" mkCursor="pointer" mkPosition="relative"mkPositionAlign="bottom" mkColor="inherit">
   
        <Element  mkTypography="caption" mkTextColor="inherit" >{author}</Element>
        <Element  mkTypography="caption" mkTextColor="inherit" >{email}</Element>
    </Element>
  );
}

