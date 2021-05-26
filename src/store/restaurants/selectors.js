export const selectAllRestaurants = (reduxState) => {
  const restaurants = [...reduxState.restaurants.allRestaurants];
  return restaurants.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
};

export const selectRestaurantsThatSellPizza = (pizzaId) => (reduxState) => {
  const restaurants = [...reduxState.restaurants.allRestaurants];
  const filteredRestaurants = restaurants.filter((restaurant) => {
    return restaurant.pizzas.includes(parseInt(pizzaId)) ? true : false;
  });
  return filteredRestaurants;
};
