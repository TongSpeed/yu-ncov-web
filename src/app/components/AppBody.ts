import { esn } from 'macoolka-ui-core';
export default esn({
    name: 'App.Body',
    defaultProps: {
        
    },
    tag: 'div',
    style:()=>( {
        mkColor: 'background.default',
        mkScrollBar: 'none',
        textRendering: 'optimizeLegibility',
        mkMinHeight: 'fullScreen',

        display: 'flex',
    }),
});