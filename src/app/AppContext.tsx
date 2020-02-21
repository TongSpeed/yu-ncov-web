import React from 'react'
import { useEventCallback } from 'macoolka-ui-core/lib/event'
import { map, withLatestFrom } from "macoolka-reactive";
import { pipe } from "fp-ts/lib/pipeable";
import { get } from 'macoolka-object'
import { AppState, AppOption, TLink } from './types'
import { getCookie } from 'macoolka-ui-core/lib/utils';
import { isBoolean } from 'macoolka-predicate'

import {
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
export const AppContext = React.createContext<AppState>(null as any);

export const useAppState = ({ style, info, components, constant, resource, functions, navItems }: AppOption): AppState => {

  const { state: pageTitles = [], callback: setPageTitles } = useEventCallback<TLink[], TLink[]>(
    {
      callback: ({ event }) => event,
      initialState: [],
    })
  const { state: isShowBar = true, callback: setShowBar } = useEventCallback<boolean, boolean>(
    {
      callback: ({ event }) => event,
      initialState: get(style, 'isShowBar', true),
    })
  const { state: isOpenNav, callback: toggleNav } = useEventCallback<boolean | undefined, boolean>(
    {
      callback: ({ event, state }) => pipe(
        event,
        withLatestFrom(state),
        map(([value, state]) =>{
            return isBoolean(value) ? value : !state
        } )
      ),
      initialState: get(style, 'isOpenNav', true),
    })
  const { state: isOpenExpandNav, callback: toggleExpandNav } = useEventCallback<void, boolean>(
    {
      callback: ({ event, state }) => pipe(
        event,
        withLatestFrom(state),
        map(([_, state]) => !state)
      ),
      initialState: get(style, 'isOpenExpandNav', false),
    })
  const { state: isLight, callback: toggleLight } = useEventCallback<void, boolean>(
    {
      callback: ({ event, state }) => pipe(
        event,
        withLatestFrom(state),
        map(([_, state]) => {

          return !state
        })
      ),
      initialState: get(style, 'isLight', true),
    })
  const { state: locale, callback: setLocale } = useEventCallback<string, string>(
    {
      callback: ({ event }) => event,
      initialState: get(style, 'locale', 'en'),
    })

  /*     const { state: pageTitle, callback: setPageTitle } = useEventCallback<PageTitle[], PageTitle[]>(
       {
         callback: ({ event }) => event,
         initialState: [],
       })  */
  // let pageTitle=[]
  return {
    style: {

      isShowBar,
      setShowBar,
      isOpenNav,
      toggleNav,
      isOpenExpandNav,
      toggleExpandNav,
      isLight,
      toggleLight,
      locale,
      setLocale,
    },
    page: {
      pageTitles,
      setPageTitles,
    },
    info: {
      ...info,
      i18n: false,
    },
    navItems,
    components,
    functions,
    constant,
    resource,
  }
}

export const AppProvider: React.SFC<{ data: AppOption }> = ({ children, data }) => {

  const appState = useAppState(data)
  const { style: { isLight, toggleLight }, info: { } } = appState
  React.useEffect(() => {
    if ((process as any).browser) {
      // const nextPaletteColors: ThemeOptions['paletteColors'] = JSON.parse(getCookie('paletteColors') || 'null');
      const nextPaletteType: 'light' | 'dark' | undefined = getCookie('paletteType') as 'light' | 'dark' | undefined;
      if (nextPaletteType && nextPaletteType !== (isLight ? 'light' : 'dark')) {
        toggleLight()
      }

    }
  }, []);

  // persist paletteType
  React.useEffect(() => {
    document.cookie = `paletteType=${isLight ? 'light' : 'dark'};path=/;max-age=31536000`;
  }, [isLight]);


  const theme = data.style.theme
  /*  React.useMemo(() => {
    return createTheme(data.style.theme, locale as any)(data.style.buildComponents);

  }, [isLight]); */
  return <AppContext.Provider value={appState}>
    <MuiThemeProvider theme={theme}>


      {children}




    </MuiThemeProvider>

  </AppContext.Provider>
}
export const useAppComponents = () => React.useContext(AppContext).components
export const useLink = () => React.useContext(AppContext).components.Link
export const useRouter = () => React.useContext(AppContext).functions.useRouter()
export const useAppInfo = () => React.useContext(AppContext).info
export const useAppConstant = () => React.useContext(AppContext).constant
export const useAppResource = () => React.useContext(AppContext).resource
export const useAppStyle = () => React.useContext(AppContext).style
export const useNavItems = () => React.useContext(AppContext).navItems

export const usePageTitles = () => React.useContext(AppContext).page.pageTitles
export const useSetPageTitles = () => React.useContext(AppContext).page.setPageTitles
//export const useQuery = () => React.useContext(AppContext).functions.query

export const usePage = () => React.useContext(AppContext).page
