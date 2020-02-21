import React from 'react';
import List from 'macoolka-ui-components/lib/List';
import Divider from 'macoolka-ui-components/lib/Divider';
import AppDrawerNavItem from './AppDrawerNavItem';
import { NavItem as NavItemInfo } from '../types'
import { makeStyles } from '@material-ui/core/styles';
import AppTitle from './AppTitle'
import { parseStandProp } from 'macoolka-ui-core'
import SideBar from './Sidebar'
import { useAppStyle, useNavItems } from '../AppContext'
import AppBottom from './AppBottom'
//import { QueryCategories } from '../../schema/ggl'
let savedScrollTop: undefined | number = undefined;
const PersistScroll: React.SFC<{}> = ({ children }) => {
    const rootRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const parent = rootRef.current ? rootRef.current.parentElement : null;
        const activeElement = document.querySelector('.drawer-active');

        if (!parent || !activeElement || !activeElement.scrollIntoView) {
            return undefined;
        }
        const activeBox = activeElement.getBoundingClientRect();

        if (savedScrollTop !== null || activeBox.top < savedScrollTop) {
            // Center the selected item in the list container.
            activeElement.scrollIntoView();
            // Fix a Chrome issue, reset the tabbable ring back to the top of the document.
            document.body.scrollIntoView();
        } else {
            parent.scrollTop = savedScrollTop;
        }

        return () => {
            savedScrollTop = parent.scrollTop;
        };
    }, []);

    return <div ref={rootRef}>{children}</div>;
}


const useStyles = makeStyles(theme => {
    return {
        appNav: {
            ...(parseStandProp(theme)({
                mkScrollBar: "vertical",
                height: 'calc(100vh - 130px)',
                mkMedia:[{
                    height: 'calc(100vh - 110px)',
                },{
                    
                }]
            })),

        },
        root: {
            ...(parseStandProp(theme)({
                color: theme.app.appNav.color,
                backgroundColor: theme.app.appNav.backgroundColor,
            })),

        },
         divider: {
            background: theme.app.appNavDivider.backgroundColor


        },
  

    }
})
const NavItem: React.SFC<{
    data: NavItemInfo,
    props: AppDrawerProp,
    /*   activePage: Option<NavItemInfo>, */
    depth: number,

}> = ({ data, depth, props }) => {
    const title = data.title;

    /*   if (page.forest.length > 0) {
  
          const topLevel = isNone(activePage) ? false : activePage.value.id.indexOf(`${page.value.id}`) === 0;
          return <AppDrawerNavItem
              // linkProps={page.linkProps}
              depth={depth}
              key={title}
              topLevel={topLevel}
              openImmediately={topLevel}
              title={title}
          >
              <List>
                  {page.forest.map(a =>
                      <NavItem key={a.value.id} page={a} activePage={activePage} depth={depth + 1} props={props}{...params}></NavItem>
  
                  )}
              </List>
  
  
          </AppDrawerNavItem>
  
      } else { */
    return <AppDrawerNavItem
        //linkProps={page.linkProps}
        depth={depth}
        key={title}

        data={data}
    />

    /*    href='/[id]'
       as={`/${page.id}`} */
    //   onClick={props.onClose}




}

// iOS is hosted on high-end devices. We can enable the backdrop transition without
// dropping frames. The performance will be good enough.
// So: <SwipeableDrawer disableBackdropTransition={false} />
//const iOS = (process as any).browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
type AppDrawerProp = {
    disablePermanent: boolean,

}
const AppDrawer: React.SFC<AppDrawerProp> = (props) => {

    const { toggleExpandNav, isOpenExpandNav } = useAppStyle()
    const classes = useStyles();
    const navItems = useNavItems()
    return (
        <SideBar open={isOpenExpandNav} handleDrawerToggle={() => toggleExpandNav({})} rtlActive={false}>
            <div className={classes.root}>
                <AppTitle />
                <Divider className={classes.divider} />
                <PersistScroll>
                    <List className={classes.appNav}>
                        {navItems.map(a =>a.title==='-'
                        ?<Divider className={classes.divider} key={a.id}/>
                        :<NavItem key={a.id} data={a} depth={0} props={props}></NavItem>)}
                    </List>
                   
                </PersistScroll>
                <AppBottom/>
            </div>

        </SideBar>

    );
}

export default AppDrawer
