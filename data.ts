import { AppOption } from './src/app'
import { createTheme } from './src/app/Theme'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { styledCommon } from 'macoolka-ui-core'
import Dashboard from "@material-ui/icons/Dashboard";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import BubbleChart from "@material-ui/icons/BubbleChart";
import LocationOn from "@material-ui/icons/LocationOn";
import Notifications from "@material-ui/icons/Notifications";
import Unarchive from "@material-ui/icons/Unarchive";
import Language from "@material-ui/icons/Language";
import config from './config.json'
const theme=createTheme()
theme.app.appNav.backgroundColor="#313131"
theme.app.appNav.color="#fff"
theme.app.appNavDivider.backgroundColor="rgba(255, 255, 255,0.38)"
theme.app.appBar.backgroundColor=theme.palette.primary.light
theme.app.appBar.color=theme.palette.common.white
const appData: AppOption = {
    constant: {
        mainNavigation: "主导航",
        openDrawer: "打开主导航栏",
        close: "关闭",
        toggleTheme: "切换浅色/深色主题",
    },
    info: {
        title: '玉彤 nCoV',
        i18n: false,
        name: 'Macoolka',
        logo:'/static/logo.png',
        email:"macoolka@gmail.com",
        author:"版权所有: 加速工作室@2020",
        href:"/",
    },
    style: {
        isOpenNav: false,
        isOpenExpandNav: false,
        isShowBar: true,
        isLight: true,
        locale: 'zh',
        theme
    },

    resource: {
        loadCss: {

        },
        loadJavscript: {
            // 'https://www.google-analytics.com/analytics.js':'head'
        },
        css: {
            '/static/root.css':'#material-icon-font'
            // 'https://fonts.googleapis.com/icon?family=Material+Icons':'#material-icon-font'
        },
        javascript: {

        }
    },
    navItems: [{
        id: 'world',
        title: "世界疫情",
        href: '/world',
        icon: styledCommon(Dashboard),
    }, {
        id: 'china',
        title: "全国疫情",
        href: '/',
        icon: styledCommon(Dashboard),
    }, {
        id: 'history',
        title: "省份疫情",
        href: '/provinces/[id]',
        as:'/provinces/ck6gr8hlb0000gh7c2a0f397x',
        icon: styledCommon(LibraryBooks),
    }, {
        id: 'news',
        title: "疫情新闻",
        href: '/news',
        icon: styledCommon(Dashboard),
    },{
        id: 'rumor',
        title: "流言粉碎机",
        href: '/rumor',
        icon: styledCommon(Dashboard),
    },{
        id: 'import',
        title: "-",
        href: '',
        as:'',
        icon: styledCommon(Notifications),
    },{
        id: 'dalian',
        title: "大连疫情",
        href: '/city/[id]',
        as:'/city/ck6gr96li003dgh7c8vfphaab',
        icon: styledCommon(Notifications),
    }, {
        id: 'shengayng',
        title: "沈阳疫情",
        href: '/city/[id]',
        as:'/city/ck6gr96e4003cgh7c6izd4uaz',
        icon: styledCommon(Language),
    },{
        id: 'heerbing',
        title: "哈尔滨疫情",
        href: '/city/[id]',
        as:' /city/ck6grb0yz00bagh7chn7x4ofi',
        icon: styledCommon(Language),
    },{
        id: 'liaoning',
        title: "辽宁疫情",
        href: '/province/[id]',
        as:'/province/ck6gr8lji000ugh7c9h38ey1g',
        icon: styledCommon(LocationOn),
    },{
        id: 'others',
        title: "-",
        href: '',
        as:'',
        icon: styledCommon(Notifications),
    },{
        id: 'hubei',
        title: "湖北疫情",
        href: '/province/[id]',
        as:'/province/ck6gr8q4u001bgh7c8qgzfi4o',
        icon: styledCommon(BubbleChart),
    }, {
        id: 'zj',
        title: "浙江疫情",
        href: '/province/[id]',
        as:'/province/ck6gr8m9w000zgh7cdznx1s6s',
        icon: styledCommon(Unarchive),
    }, {
        id: 'bj',
        title: "北京疫情",
        href: '/province/[id]',
        as:'/province/ck6gr8qgu001dgh7cgcuydjf0',
        icon: styledCommon(Notifications),
    }, 
    ],
    components: {
        Link: Link as any,
        AppHeader: React.Fragment,
        PageRoot: React.Fragment,
        PageToolBar: React.Fragment

    },
    functions: {
        useRouter
    },

}
export default appData