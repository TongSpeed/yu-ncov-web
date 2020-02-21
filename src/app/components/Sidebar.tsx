/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import {useAppStyle} from '../AppContext'
import { parseStandProp } from 'macoolka-ui-core'
const useStyles = makeStyles((theme) => ({
    drawerPaper: () => ({
        ...(parseStandProp(theme)({
            mkShadow: 0,
            zIndex: 1,
            mkPosition: 'fixed',
            mkPositionAlign: 'left',
            mkBorder: "none",
            flexShrink: 0,
            mkWidth: 'nav',
            mkScrollBar: "none",
            paddingTop: theme.box.height.bar_large,
            mkMedia: [{

            }, {
                mkHeight: 'fullScreen',
                mkShadow: 4,
                mkZIndex: "drawer"

            }, {

                //   left: "auto",
                mkHeight: "fullScreen",
                //  mkZIndex: "drawer",

                transform: `translate3d(${theme.box.width.nav}px, 0, 0)`,
                transition: "all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)",
                mkTextAlign: "left",
                borderTop: "none",
                mkPaddingH: "none",
            }]
        })),

    }),
    drawerPaperRTL: {
        ...parseStandProp(theme)({
            mkMedia: [{


            }, {
                left: "auto !important",
                right: "0 !important"
            }, {
                left: "0  !important",
                right: "auto !important"
            }]
        })
    },
    hideOnlyXl: {
        ...parseStandProp(theme)({
            mkMedia: [{


            }, {

            }, {
                mkVisible: "visible"
            }, {
                mkVisible: "none"
            }]
        })
    },
    showOnlyxl: {
        ...parseStandProp(theme)({
            mkMedia: [{


            }, {


            }, {
                mkVisible: "none"

            }, {
                mkVisible: "visible"
            }]
        })
    }
}))
const Sidebar: React.SFC<{ rtlActive?: boolean, handleDrawerToggle: () => void, open: boolean }> =
    ({ rtlActive = false, open, children, handleDrawerToggle }) => {
        const classes = useStyles();
        const {isOpenNav,toggleNav}=useAppStyle()

        return (
            <div>
                <div className={classes.hideOnlyXl}>

                    <Drawer
                        variant="temporary"
                        anchor={rtlActive ? "left" : "right"}
                        open={isOpenNav}
                        classes={{
                            paper: classNames(classes.drawerPaper, {
                                [classes.drawerPaperRTL]: rtlActive
                            })
                        }}
                        onClose={toggleNav}
                        ModalProps={{
                            keepMounted: true // Better open performance on mobile.
                        }}
                    >
                        {children}
                    </Drawer>

                </div>
                <div className={classes.showOnlyxl}>
                    <Drawer
                        anchor={rtlActive ? "left" : "right"}
                        variant="permanent"
                        open={isOpenNav}
                        classes={{
                            paper: classNames(classes.drawerPaper, {
                                [classes.drawerPaperRTL]: rtlActive
                            })
                        }}
                    >
                        {children}
                    </Drawer>
                </div>
            </div>
        );
    }

export default Sidebar