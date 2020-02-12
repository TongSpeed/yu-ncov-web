import { esn } from 'macoolka-ui-core';

export interface MaskModalProps {
    opened?: boolean;
    navOpened?: boolean;
}
export default esn<MaskModalProps>({
    name: 'App.MaskModal',
    defaultProps: { opened: false },
    tag: 'div',
    style:()=>( {
        mkFixed: 'top',
        mkWidth: 'full',
        mkHeight: 'full',
        mkTransitionObject: 'opacity',
        backgroundColor: 'rgba(0,0,0,.5)',
        transform: 'translateZ(0)',
        mkZIndex: 'modal',
    }),
    ruleEnum: {
        opened: {
            true: {

                opacity: 1,
                mkVisible: 'visible',
            },
            false: {

                mkVisible: 'hidden',
                opacity: .1,
            },
        },
        navOpened: {
            true: {

                mkMedia: [{

                }, {

                }, {
                    mkVisible: 'visible',
                    opacity: 1,
                }],
            },
            false: {

                mkMedia: [{

                }, {

                }, {
                    mkVisible: 'hidden',
                    opacity: .1,
                }],
            },
        },
    },

});
