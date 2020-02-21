import { Theme,StandProps } from 'macoolka-ui-core'
import { NextRouter } from 'next/router';

export interface SiteResource {
    css: Record<string, string>
    javascript: Record<string, string>
    loadCss: Record<string, string>,
    loadJavscript: Record<string, string>,
}
export interface SiteModel {
    title: string;
    logo:string;
    author?: string;
    email:string;
    name: string;
    href:string
    as?:string
    bgImgUrl?: string
    i18n: boolean,
}
export type AppConstant = {
    mainNavigation: string
    openDrawer: string
    toggleTheme: string
    close:string
  
}
export interface NavItem {
    id: string
    title: string;
    icon: React.ComponentType<StandProps>
    href?: string
    as?: string
}
export interface Page extends NavItem {
    href: string
}
export interface SiteStyle {
    isOpenNav: boolean,
    isOpenExpandNav: boolean,
    isShowBar: boolean,
    isLight: boolean;
    locale: string;
    theme: Theme,
}

export interface SiteStyleHandle {
    setShowBar: (a: boolean) => void
    toggleNav: (a?: boolean|undefined) => void
    toggleExpandNav: (a: any) => void
    toggleLight: (a?: any) => void
    setLocale: (a: string) => void

}
export type LinkProps = {
    href?: string;
    as?: string;
}
export type Link = React.ComponentType<{
    href: string;
    as?: string;
    naked?: boolean,
}>
export type Query<P> = (a: P) => React.ReactNode
export type TLink = { title: string, href?: string, as?: string }
export type AppState = {
    info: SiteModel,
    resource: SiteResource,
    navItems:NavItem[],
    constant: AppConstant
    style: Omit<SiteStyle, 'theme'|'buildComponents'> & SiteStyleHandle,
    page: { 
        pageTitles: Array<TLink>,
        setPageTitles:(links:Array<TLink>)=>void
    },
    components: {
        Link: Link
        AppHeader: React.ComponentType
        PageRoot: React.ComponentType
        PageToolBar: React.ComponentType
    },
    
    functions: {
        useRouter: () => NextRouter
    }
}
export type AppOption = {
    info: SiteModel,
    style: SiteStyle,
    resource: SiteResource,
    constant: AppConstant
    navItems:NavItem[]
    components: {
        Link: Link
        AppHeader: React.ComponentType
        PageRoot: React.ComponentType
        PageToolBar: React.ComponentType
    },
    //page: { getPageTitle: () => Array<TLink> }
    functions: {
        useRouter: () => NextRouter
      /*   getNavItemLinkProp: (a: NavItem) => {
            href: string;
            as?: string;
            naked?: boolean
        } */
        //query: <K extends string = string>(key: K) => (a: any) => React.ReactNode
    },

}