import React from "react";
import classes from "./header.module.scss";

const Header = props => <div className={classes.Header}>{props.children}</div>;

export default Header;
