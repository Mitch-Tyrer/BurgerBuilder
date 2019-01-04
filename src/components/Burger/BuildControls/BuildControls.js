import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control/Control';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <Control key={ctrl.label} label={ctrl.label} />
        ))}
    </div>
);

export default buildControls;

