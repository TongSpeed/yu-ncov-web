import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardIconStyle";
import {ColorProps} from '../types'

const useStyles = makeStyles(styles);

const CardIcon: React.SFC<{
  className?: string, color: ColorProps
}> = (props) => {
  const classes:any = useStyles();
  const { className, children, color, ...rest } = props;
  const colorHeader=color + "CardHeader"
 
  const cardIconClasses = classNames({
    [classes.cardIcon]: true,
    [classes[colorHeader]]: color,
    ...className ? { [className]: true } : {}
  });
  return (
    <div className={cardIconClasses} {...rest}>
      {children}
    </div>
  );
}

export default CardIcon