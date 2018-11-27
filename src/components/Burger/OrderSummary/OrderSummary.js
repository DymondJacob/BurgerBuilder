import React from "react";
import Auxx from "../../../hoc/Auxx";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Auxx>
      <h3>Your Order</h3>
      <p>A delecious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        {" "}
        <strong>Total Price: {props.price.toFixed(2)} </strong>
      </p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxx>
  );
};

export default orderSummary;
