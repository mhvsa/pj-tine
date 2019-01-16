import React from "react";
import classes from "./formInput.module.scss";

const FormInput = props => {
  let invalid = props.touched && !props.valid;
  let valid = props.touched && props.valid;
  let validationMessageStyle = invalid
    ? `${classes.InvalidMessage} ${classes.Invalid}`
    : `${classes.InvalidMessage} ${classes.Valid}`;
  let inputClasses = [classes.Input];
  if (valid) inputClasses.push(classes.Valid);
  else if (invalid) inputClasses.push(classes.Invalid);
  return (
    <div className={classes.Container}>
      <div className={classes.Label}>{props.label}</div>
      <input
        className={inputClasses.join(" ")}
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
      />
      <div className={validationMessageStyle}>{props.invalidMessage}</div>
    </div>
  );
};
export default FormInput;
