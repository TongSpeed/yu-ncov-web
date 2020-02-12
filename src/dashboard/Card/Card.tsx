import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardStyle";

const useStyles = makeStyles(styles as any);

const  Card:React.SFC<{plain?:boolean,profile?:boolean,className?:string,chart?:boolean}>=(props)=> {
  const classes = useStyles();
  const { className, children, plain, profile, chart, ...rest } = props;
  const cardClasses = classNames({
    [classes.card]: true,
    [classes.cardPlain]: plain,
    [classes.cardProfile]: profile,
    [classes.cardChart]: chart,
    ...className ? { [className]: true } : {}
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}
export default Card