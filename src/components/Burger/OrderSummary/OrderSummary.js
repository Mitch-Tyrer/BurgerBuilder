import React from 'react';
import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';


const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
        return <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>
    });

    let glutenFree = <strong>{props.glutenFree}</strong>;
    let protienStyle = <strong>{props.protienStyle}</strong>;

    return (
        <Aux>
            <h3>Your Order</h3>
            <ul>
                {ingredientSummary}
                {glutenFree}
                {protienStyle}
            </ul>
            <p><strong>Total: ${props.price.toFixed(2)}</strong></p>
            <p>Continue with Order?</p>
            <Button btnType="Danger" clicked={props.purchaseCancel}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </Aux>
    )
};

export default orderSummary;


//Was made into a stateful Component in order to debug.
//Converted back as it can now be a functional component.
