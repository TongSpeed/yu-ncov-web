import React from 'react'
import Tooltip from '@material-ui/core/Tooltip';

//import { useI18N } from '../../context/I18NContext'

import IconButton from '@material-ui/core/IconButton';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/Brightness7';

import { useAppStyle, useAppConstant } from '../AppContext'
export default () => {

  //const t = useI18N();

  const { toggleLight, isLight } = useAppStyle()
  const { toggleTheme } = useAppConstant()
  return (
    <Tooltip title={toggleTheme} enterDelay={300}>
      <IconButton
        color="inherit"
        onClick={() => {

          toggleLight()
        }}
        aria-label={toggleTheme}
        data-ga-event-category="AppBar"
        data-ga-event-action="dark"
      >
        {isLight ? <Brightness4Icon /> : <Brightness7Icon />}
      </IconButton>
    </Tooltip>
  )
}