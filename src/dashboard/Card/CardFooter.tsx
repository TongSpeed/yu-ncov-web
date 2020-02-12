import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardFooterStyle";

const useStyles = makeStyles(styles);

const CardFooter:React.SFC<{className?:string,plain?:boolean,stats?:boolean,profile?:boolean,chart?:boolean}>=(props)=> {
  const classes = useStyles();
  const { className, children, plain, profile, stats, chart, ...rest } = props;
  const cardFooterClasses = classNames({
    [classes.cardFooter]: true,
    [classes.cardFooterPlain]: plain,
    [classes.cardFooterProfile]: profile,
    [classes.cardFooterStats]: stats,
    [classes.cardFooterChart]: chart,
    ...className ? { [className]: true } : {}
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}
export default CardFooter

