import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import styles from "./cardBodyStyle";

const useStyles = makeStyles(styles as any);

const CardBody:React.SFC<{plain?:boolean,profile?:boolean,className?:string}>=(props)=> {
  const classes = useStyles();
  const { className, children, plain, profile, ...rest } = props;
  const cardBodyClasses = classNames({
    [classes.cardBody]: true,
    [classes.cardBodyPlain]: plain,
    [classes.cardBodyProfile]: profile,
    ...className ? { [className]: true } : {}
  });
  return (
    <div className={cardBodyClasses} {...rest}>
      {children}
    </div>
  );
}
export default CardBody

