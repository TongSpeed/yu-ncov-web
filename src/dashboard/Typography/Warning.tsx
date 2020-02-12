import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "./typographyStyle";

const useStyles = makeStyles(styles);

export default function Warning(props) {
  const classes = useStyles();
  const { children } = props;
  return (
    <div className={classes.defaultFontStyle + " " + classes.warningText}>
      {children}
    </div>
  );
}

