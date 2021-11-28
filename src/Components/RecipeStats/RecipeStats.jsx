import React from 'react';
import Listitem from '../ListItem/Listitem';

const RecipeStats = ({ recipe }) => {
  return (
    <>
      <Listitem
        title="Calorías"
        item={recipe?.nutrition.nutrients[0].amount}
        calories
      />
      <Listitem title="Precio" item={recipe?.pricePerServing} price />
      <Listitem title="Minutos de preparación" item={recipe?.readyInMinutes} />
      <Listitem title="Health score" item={recipe?.healthScore} />
    </>
  );
};

export default RecipeStats;
