import React from 'react';
import BurgerIngredient from './BurguerIngredient/BurgerIngridient';

import classes from './Burger.css';

const burger = ( props ) => {

  let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
      return [...Array(props.ingredients[igKey])].map( (_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      });
    })
    .reduce( (array, current) => {
      return array.concat(current);
    }, []);
  

  if ( transformedIngredients.length === 0 ) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }
  return (
    <div className={classes.Burger}>
      
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;