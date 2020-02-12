import React from "react";
import { makeStyles } from "@material-ui/core/styles";
// core components
import styles from "./typographyStyle";

const useStyles = makeStyles(styles);

const  Quote:React.SFC<{author?:boolean,text?:React.ReactNode}>=(props)=> {
  const classes = useStyles();
  const { text, author } = props;
  return (
    <blockquote className={classes.defaultFontStyle + " " + classes.quote}>
      <p className={classes.quoteText}>{text}</p>
      <small className={classes.quoteAuthor}>{author}</small>
    </blockquote>
  );
}
export default Quote
