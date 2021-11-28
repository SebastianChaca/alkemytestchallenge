export const addRecipeToMenu = (menu, recipeToAdd) => {
  const existingMenuItem = menu.find(
    menuItem => menuItem.id === recipeToAdd.id
  );

  if (existingMenuItem) {
    return [...menu];
  }

  return [...menu, recipeToAdd];
};

export const removeItemFromCart = (menu, recipeToremove) => {
  return menu.filter(menuItem => menuItem.id !== recipeToremove);
};

export const getTotals = menu => {
  if (menu.length === 0) return;
  let menuTotal = menu?.reduce(
    (total, menuItem) => {
      const { healthScore, readyInMinutes, pricePerServing, nutrition } =
        menuItem;
      total.items += 1;
      total.healthScore += healthScore;
      total.minutes += readyInMinutes;
      total.price += pricePerServing;
      total.calories += nutrition.nutrients[0].amount;
      return total;
    },
    {
      healthScore: 0,
      price: 0,
      minutes: 0,
      calories: 0,
      items: 0,
    }
  );
  console.log(menuTotal);
  return {
    ...menuTotal,
    healthScore: menuTotal.healthScore / menuTotal.items,
    minutes: menuTotal.minutes / menuTotal.items,
  };
};
