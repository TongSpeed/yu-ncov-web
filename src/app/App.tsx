
import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import NProgressBar from './components/NProgressBar';
import AppDrawer from './components/AppDrawer';
import MenuAction from './components/MenuAction'
import AppContent from './components/AppContent'

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
let dependenciesLoaded = false;
// Configure JSS
const jss = create({
  plugins: [...jssPreset().plugins, ],
  insertionPoint: (process as any).browser ? document.querySelector('#insertion-point-jss') : undefined as any,
});
const AppFrame: React.SFC<{}> = ({ children, }) => {
  const resource = useAppResource()
  const { bgImgUrl } = useAppInfo()
  const { isShowBar } = useAppStyle()
  const { PageRoot, PageToolBar } = useAppComponents()
  React.useEffect(() => {
    if (dependenciesLoaded)
      return
    dependenciesLoaded = true

    loadDependencies(resource);
    registerServiceWorker();

    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
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
