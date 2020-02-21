
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NProgressBar from './components/NProgressBar';
import AppDrawer from './components/AppDrawer';
import MenuAction from './components/MenuAction'
import AppContent from './components/AppContent'

import PerfectScrollbar from "perfect-scrollbar";
//import AppSearch from './components/AppSearch'
import AppPage from './components/AppBody';
import { img as Img } from 'macoolka-ui-components/lib/Html'
import PageTitle from './components/PageTitle'
import { useAppStyle, useAppInfo, useAppComponents, useAppResource } from './AppContext'
import AppBar from './components/AppBar'
import { create } from 'jss';
import { registerServiceWorker, loadDependencies } from './helper'

import { StylesProvider, jssPreset } from '@material-ui/styles';
import FlexFlow from 'macoolka-ui-components/lib/FlexGrow'

import Router from 'next/router'
let dependenciesLoaded = false;
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, ],
  insertionPoint: (process as any).browser ? document.querySelector('#insertion-point-jss') : undefined as any,
});
const AppFrame: React.SFC<{}> = ({ children, }) => {
  const resource = useAppResource()
  const { bgImgUrl } = useAppInfo()
  const { isShowBar,isOpenNav,toggleNav } = useAppStyle()
  const { PageRoot, PageToolBar } = useAppComponents()
  const resizeFunction = () => {
    if (window.innerWidth >= 960) {
      toggleNav(false);
    }
  };

  Router.events.on('routeChangeComplete', () => {
    toggleNav(false);
  })
  const mainPanel = React.createRef<any>();
  React.useEffect(() => {
    if (dependenciesLoaded)
      return
    dependenciesLoaded = true

    loadDependencies(resource);
   // registerServiceWorker();

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  React.useEffect(() => {
    let ps;
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(mainPanel.current, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }

    window.addEventListener("resize", resizeFunction);
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
      }
      window.removeEventListener("resize", resizeFunction);
    };
  }, [mainPanel]);
  return (
    <StylesProvider jss={jss}>
      <AppPage>
        <NProgressBar />
        <CssBaseline />
        {(bgImgUrl && isShowBar) ? <Img src={bgImgUrl}
          mkImage="center" mkWidth="full" mkHeight="full" mkFixed="full" /> : undefined}

        <AppBar >

          <MenuAction />
          <PageTitle />
          <FlexFlow />
        
         

        </AppBar>
        <AppDrawer disablePermanent={true} />
        <AppContent>
          <PageRoot>
            {children}
          </PageRoot>
        </AppContent>
      </AppPage>
    </StylesProvider>
  );
}


export default AppFrame;
