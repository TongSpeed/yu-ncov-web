import { esn } from 'macoolka-ui-core';
export default esn({
    name: 'App.Content',
    defaultProps: {},
    tag: 'div',
    style: ()=>({
        position: 'relative',
     
        mkBlock: 'center',
        mkMaxWidth: 'app_large',
        mkPaddingV:'large',
         mkMedia: [{
           // mkContentWidth: 'small',
            mkWidth:'full',
            mkPaddingH:'large',
          }, {
            mkWidth: 'app_medium',
    
        }, {
            mkWidth: 'app_large',
    
        }], 
    }),
}); 