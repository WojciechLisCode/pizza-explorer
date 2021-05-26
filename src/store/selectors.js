export const selectRestaurantsWithPizzas = (reduxState) => {
  const restaurants = [...reduxState.restaurants.allRestaurants];
  const pizzas = [...reduxState.pizzas.allPizzas];
  const restaurantsWithPizzas = restaurants.map((restaurant) => {
    return {
      ...restaurant,
      pizzas: restaurant.pizzas.map((restaurantPizza) => {
        return pizzas.find((pizza) => {
          return restaurantPizza === pizza.id ? true : false;
        });
      }),
    };
  });

  return restaurantsWithPizzas;
};
export const selectPizzasSoldByRestaurant = (restaurantId) => (reduxState) => {
  const restaurants = [...reduxState.restaurants.allRestaurants];
  const pizzas = [...reduxState.pizzas.allPizzas];
  const selectedRestaurant = restaurants.find((restaurant) => {
    return restaurant.id === restaurantId ? true : false;
  });
  const selectedRestaurantPizzas = selectedRestaurant.pizzas.map(
    (selectedRestaurantPizza) => {
      return pizzas.find((pizza) => {
        return selectedRestaurantPizza === pizza.id ? true : false;
      });
    }
  );
  return selectedRestaurantPizzas;
  // your logic goes here - it will be slightly more complex than the previous exercise
};
