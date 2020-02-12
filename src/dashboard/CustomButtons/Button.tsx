import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";

// material-ui components
import { makeStyles } from "@material-ui/core/styles";
import Button, { ButtonProps } from "@material-ui/core/Button";

import styles from "./buttonStyle";
import { ColorProps } from '../types'
const useStyles = makeStyles(styles as any);

const RegularButton: React.SFC<ButtonProps&{
  color: ColorProps | "white" | "transparent"
  size?: 'sm' | 'lg'
  simple?: boolean
  round?: boolean
  disabled?: boolean
  block?: boolean
  link?: boolean
  justIcon?: boolean
  className?: string
  // use this to pass the classes props from Material-UI
  muiClasses?: any
}> = (props) => {
  const classes = useStyles();
  const {
    color,
    round,
    children,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    muiClasses,
    ...rest
  } = props;
  const btnClasses = classNames({
    [classes.button]: true,
    ...(size ? { [classes[size as any]]: true } : {}),

    [classes[color]]: color,
    [classes.round]: round,
    [classes.disabled]: disabled,
    [classes.simple]: simple,
    [classes.block]: block,
    [classes.link]: link,
    [classes.justIcon]: justIcon,
    ...className ? { [className]: true } : {}
  });
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
}
export default RegularButton

