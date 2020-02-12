import React from 'react';
//import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from 'macoolka-ui-components/lib/ListItem';
import Button from 'macoolka-ui-components/lib/Button';
import Collapse from 'macoolka-ui-components/lib/Collapse';

import Element from 'macoolka-ui-components/lib/Element';
import { useLink } from '../AppContext'
import { NavItem as NavItemInfo } from '../types'
import {get} from 'macoolka-object'
import {parseStandProp} from 'macoolka-ui-core'
const useStyles = makeStyles(theme => ({
  item: {
    display: 'block',
    paddingTop: 0,
    paddingBottom: 0,
  },
  itemLeaf: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
    height:"50px",
    ...parseStandProp(theme)({mkMarginH:"medium",mkPaddingH:"medium",mkPaddingV:"small",mkMarginTop:"small"}),
    ...get(theme,["components","NavItem"],{})
  },
  button: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    color: theme.palette.secondary.main,
  },
  buttonLeaf: {
    letterSpacing: 0,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
}));

const AppDrawerNavItem: React.SFC<{
  depth: number,
  data: NavItemInfo
  //href?: string,
  //as?: string,
  // linkProps?: { [key: string]: string },
  onClick?: () => void,
  openImmediately?: boolean,

  topLevel?: boolean,
}> = ({
  children,
  depth,
  data,
  // href,
  onClick,
  openImmediately = false,
  topLevel = false,

  //linkProps,
  //as,
  ...other
}) => {

    const classes = useStyles();
    const [open, setOpen] = React.useState(openImmediately);

    const handleClick = () => {
      setOpen(oldOpen => !oldOpen);
    };

    const style = {
      paddingLeft: 8 * (3 + 2 * depth),
    };
  //  const LinkProps = useNavItemLinkProp()(data)
    const Link = useLink()
    const Icon=data.icon
       if (data.id) {
      return (
        <Link   href={data.href!}
        as={data.as}>
          <ListItem component={Button}  onClick={onClick}  disableTouchRipple
          className={classes.itemLeaf} disableGutters {...other} button={true} 
           mkTextColor="inherit">
            <Icon/>
            <Element mkMarginLeft="medium" mkTypography="subtitle1">{data.title}</Element>
      {/*       <Button
             
              
              // activeClassName={`drawer-active ${classes.active}`}
              className={clsx(classes.buttonLeaf, `depth-${depth}`)}
              
              
             
             
              style={style}
            
        
            >
              {data.title}
            </Button> */}
           
          

          </ListItem>
          </Link>

      );
    }

    return (
      <ListItem className={classes.item} disableGutters button={true} {...other}>
        <Button
          classes={{
            root: classes.button,
            label: topLevel ? 'algolia-lvl0' : '',
          }}
          onClick={handleClick}
          style={style}
        >
          {data.title}
        </Button>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {children}
        </Collapse>
      </ListItem>
    );
  }


export default AppDrawerNavItem;
