import { esn } from 'macoolka-ui-core';
export interface AppNavContentProp {
    expanded: boolean;
}
export const NavContent = esn<AppNavContentProp>({
    name: 'App.NavContent',
    defaultProps: {
        expanded: false
    },
    tag: 'div',
    style:()=>( {
        mkWidth: 'full',
        float: 'left',
        mkHeight: 'full',
        mkColor: 'background.paper',
        mkTransitionObject: 'padding-left',
        boxSizing: 'border-box',
    
    }),
    rule: {
        //expanded: ({ value,source }) => value ? { sideExpand, mkMedia: [{}, {}, { mkZIndex: 'popup' }] } : sideHide,
        expanded: ({ theme, value }) => (value ? {
            paddingBottom: 100,
            mkPaddingLeft: 'nav',

            marginTop: theme.box.height.bar_large,
            //     paddingLeft: lens.boxWidthLens.get(theme).nav,
            boxSizing: 'border-box',
            mkMedia: [{
                marginTop: theme.box.height.bar_medium,
                paddingLeft: 0,
                paddingBottom: 50,
            }, {
                paddingLeft: 0,
            }, {
                paddingLeft: 0,
            }],
        } : {
                mkPaddingLeft: 'none'
            }),
    }
});