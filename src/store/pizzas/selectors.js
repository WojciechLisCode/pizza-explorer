export const selectAllPizzas = (reduxState) => {
  const pizzas = [...reduxState.pizzas.allPizzas];
  return pizzas.sort((a, b) => b.bought - a.bought);
};
