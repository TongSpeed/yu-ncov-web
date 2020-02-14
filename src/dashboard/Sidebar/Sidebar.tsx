/*eslint-disable*/
import React from "react";
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import styles from "./sidebarStyle";

const useStyles = makeStyles(styles as any);
export interface SidebarProps {
  rtlActive?: boolean,
  handleDrawerToggle: () => void,
  open: boolean
}
export const Sidebar: React.SFC<SidebarProps> = ({ open, handleDrawerToggle, rtlActive,children }) => {
  const classes = useStyles();
  return (
    <div>
      <Hidden lgUp implementation="css">
        <Drawer
          variant="temporary"
          anchor={rtlActive ? "left" : "right"}
          open={open}
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: rtlActive
            })
          }}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
        >
          {children}
        </Drawer>
      </Hidden>
      <Hidden mdDown implementation="css">
        <Drawer
          anchor={rtlActive ? "right" : "left"}
          variant="permanent"
          open
          classes={{
            paper: classNames(classes.drawerPaper, {
              [classes.drawerPaperRTL]: rtlActive
            })
          }}
        >
           {children}
        </Drawer>
      </Hidden>
    </div>
  );
}

export default Sidebar