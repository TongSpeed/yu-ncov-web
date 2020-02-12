import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardHeaderStyle";
import {ColorProps} from '../types'
const useStyles = makeStyles(styles as any);

const CardHeader:React.SFC<{color?:ColorProps,className?:string,plain?:boolean,stats?:boolean,icon?:boolean}>=(props)=> {
  const classes = useStyles();
  const { className, children, color, plain, stats, icon, ...rest } = props;
  const cardHeaderClasses = classNames({
    [classes.cardHeader]: true,
    [classes[color + "CardHeader"]]: color,
    [classes.cardHeaderPlain]: plain,
    [classes.cardHeaderStats]: stats,
    [classes.cardHeaderIcon]: icon,
    ...className ? { [className]: true } : {}
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}
export default CardHeader
