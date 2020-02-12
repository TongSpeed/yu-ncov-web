import React from 'react'
import  _AppBar from 'macoolka-ui-components/lib/AppBar';
import Toolbar from 'macoolka-ui-components/lib//Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { parseStandProp } from 'macoolka-ui-core'
const useStyles = makeStyles(theme => ({
     
    appBar: {
      ...parseStandProp(theme)({
        mkHeight:"bar_large",
        mkMedia:[
          {  mkHeight:"bar_small",},
          {mkHeight:"bar_medium",},
          {width:'100%' },
          {
            width: `calc(100% - ${theme.box.width.nav}px)`,
          }
        ],
      }),
 
      color:  theme.app.appBar.color ,
      backgroundColor:  theme.app.appBar.backgroundColor ,
      transition: theme.transitions.create('left'),
      
    },
    /*  appBarShift: {
      [theme.breakpoints.up('lg')]: {
        
      },
    }, */
   
  }));
  
const AppBar: React.SFC<{}> = ({ children }) => {
  
    const classes = useStyles();
      let appBarClassName = classes.appBar;
   // appBarClassName += ` ${classes.appBarShift}`;
    return (
    
  
        <_AppBar className={appBarClassName}>
          <Toolbar  >
            {children}
  
          </Toolbar>
        </_AppBar>
      
    );
  }
export default AppBar