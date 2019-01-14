import React from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = ( props ) => {

  const ingredientsSummary = Object.keys(props.ingredients)
    .map( ingKey => {
      return (
        <li key={ingKey}>
          <span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {props.ingredients[ingKey]}
        </li>
      );
    });

  return (
    <Aux>
      <h3>Your order</h3>
      <p>A delicious burguer with the following ingredients:</p>
      <ul>
        { ingredientsSummary }
      </ul>
      <p><strong>Total Price:</strong> {props.price.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
      <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
      
    </Aux>
  )

};

export default orderSummary;