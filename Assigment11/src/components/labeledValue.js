import React from "react";
import classes from "./labeledValue.module.scss";

const LabeledValue = props => (
  <div className={classes.LabeledValue}>
    <div className={classes.Label}>{props.label}:</div>
    <div className={classes.Value}>{props.value}</div>
  </div>
);

export default LabeledValue;
