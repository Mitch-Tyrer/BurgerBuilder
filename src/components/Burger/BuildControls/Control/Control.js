import React from 'react';
import classes from "./Control.module.css";

const control = (props) => (
    <div className={classes.Control}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.More} onClick={props.added}>+</button>
        <button className={classes.Less}>-</button>
    </div>
);

export default control;