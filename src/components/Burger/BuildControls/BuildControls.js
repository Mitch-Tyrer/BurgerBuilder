import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control/Control';
import AltBuns from "./AlternativeBuns/AlternativeBuns";

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <AltBuns >Protien Style</AltBuns>
        <AltBuns>Gluten Free</AltBuns>
        <p>Current Price: <strong>$ {props.price.toFixed(2)} </strong></p>
        {controls.map(ctrl => (
            <Control key={ctrl.label} 
                label={ctrl.label} 
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchaseable}
        onClick={props.ordered}>ORDER NOW!</button>
    </div>
);

export default buildControls;

