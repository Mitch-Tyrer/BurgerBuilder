import React, { Component } from 'react';
import Aux from '../../../hoc/Auxiliary';
import Burger from '../../Burger/Burger';
import BuildControls from "../../Burger/BuildControls/BuildControls";
import Modal from '../../UI/Modal/Modal';
import OrderSummary from '../../Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
    glutenfree: 1.25
}

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
        glutenCheck: false,
        protienStyleCheck: false,
        isGlutenFree: null,
        isProtienStyle: null
    }

    glutenCheckHandler = () => {
        this.setState(
            prevState => ({
                glutenCheck: !prevState.glutenCheck
            }),
            this.glutenPriceHandler,
        );
    }

    glutenPriceHandler = () => {
        this.setState(
            prevState => {
                let myGlutenPrice;
                let isGlutenFree;
                if (this.state.glutenCheck) {
                    myGlutenPrice = 1.25;
                    isGlutenFree = "Gluten Free";
                } else {
                    myGlutenPrice = -1.25;
                    isGlutenFree = null;
                }
                return {
                    totalPrice: prevState.totalPrice + myGlutenPrice,
                    isGlutenFree: isGlutenFree
                }
            }
        )
    }


    protienStyleCheckHandler = () => {
        this.setState(
            prevState => ({
                protienStyleCheck: !prevState.protienStyleCheck
            }),
            this.protienStyleHandler
        )
    }

    /*     shouldComponentUpdate = () => {
            if(this.state.protienStyleCheck) {
                this.state.isProtienStyle = "Protien-Style";
            } else {
                this.state.isProtienStyle = null;
            } this.setState(this.state.isProtienStyle);
        }
             */

    protienStlyeHandler = () => {
        if (this.state.protienStyleCheck) {
            this.state.isProtienStyle = "Protien-Style";
        } else {
            this.state.isProtienStyle = null;
        }
        this.setState(this.state.isProtienStyle);
    }

    updatePurchaseState(ingredients) {
        const sum = Object.keys(ingredients).map(igKey => {
            return ingredients[igKey];
        }).reduce((sum, el) => {
            return sum + el;
        }, 0);
        this.setState({ purchaseable: sum > 0 });
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true })
    }
    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    purchaseContinueHandler = () => {
        alert('Order Complete!');
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCounted = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceAddition = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updatedCounted = oldCount - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCounted;
        const priceDeduction = INGREDIENT_PRICES[type]
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
        this.updatePurchaseState(updatedIngredients);
    }

    render() {
        const disableInfo = {
            ...this.state.ingredients
        };
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0
        }

        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        purchaseCancel={this.purchaseCancelHandler}
                        purchaseContinue={this.purchaseContinueHandler}
                        price={this.state.totalPrice}
                        glutenFree={this.state.isGlutenFree}
                        protienStyle={this.state.isProtienStyle}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients}
                    protienStyle={this.state.protienChecked}
                    protienStyleProps={this.protienStyleHandler} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientRemoved={this.removeIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    glutenCheckedProps={this.state.glutenCheck}
                    glutenChecked={this.glutenCheckHandler}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;