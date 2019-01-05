import React from 'react';
import classes from './BuildControls.module.css';
import Control from './Control/Control';
import Checkbox from '../../UI/Checkbox/Checkbox';


const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <Checkbox
        myCheckboxBooleanProps = {props.glutenCheckedProps}
        myCheckboxMethodProps={props.glutenChecked}>
        Gluten Free
    </Checkbox>
    <Checkbox
        myCheckboxBooleanProps = {props.protienStyleProps}
        myCheckboxMethodProps={props.protienStyleChecked}>
        Protien Style
    </Checkbox>
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

