

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Container from 'macoolka-ui-components/lib/Container';

import { parseStandProp } from 'macoolka-ui-core'
const useStyles = makeStyles(theme => ({
  root: {

    //flex: '1 1 100%',
    position: 'relative',
    //  width: '1160px',
    outline: 0,
    /*   [theme.breakpoints.up('sm')]: {
        paddingRight: theme.spacing(1),
        maxWidth: 'calc(100% - 175px)',
      },
      [theme.breakpoints.up('lg')]: {
        paddingLeft: theme.spacing(6),
        paddingRight: theme.spacing(6),
        maxWidth: 'calc(100% - 175px - 240px)',
      }, */
    ...parseStandProp(theme)({


      
     
      mkPaddingBottom: 'large',
      paddingTop: 80 + 16,
      left: 0,
      mkMedia: [{
        // mkContentWidth: 'small',
        mkWidth: 'full',
        mkPaddingH: 'large',
      }, {
        mkWidth: 'app_medium',

      }, {
        mkWidth: 'app_large',
        mkBlock: 'center',
        left: 0,
      }, {
        left: theme.box.width.nav,
        width: `calc(100% - ${theme.box.width.nav}px)`,
        mkPaddingH: 'large',
      }],
    })

  },

}));

const AppContent: React.SFC<{
  className?: string,

}> = ({ children, className }) => {

  const classes = useStyles();

  return (
    <Container
      component="main"
      id="main-content"
      tabIndex={-1}
      className={clsx(
        classes.root,

        className,
      )}
    >

      {children}


    </Container>
  );
}
export default AppContent
