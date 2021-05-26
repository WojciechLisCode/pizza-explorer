import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";
import { selectPizzasSoldByRestaurant } from "../store/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { selectRestaurantsThatSellPizza } from "../store/restaurants/selectors";
import { useState } from "react";

export default function RestaurantsList() {
  const pizzas = useSelector(selectAllPizzas);
  const restaurantsWithPizzas = useSelector(selectRestaurantsWithPizzas);
  const [pizzaSelect, setPizzaSelect] = useState(pizzas[0].id);
  const [restaurantSelect, setRestaurantSelect] = useState(56644);
  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(pizzaSelect)
  );
  const pizzasSoldBySelectedRestaurant = useSelector(
    selectPizzasSoldByRestaurant(restaurantSelect)
  );

  return (
    <div>
      <div>
        <h4>
          {"What sells "}
          <select
            value={restaurantSelect}
            onChange={(event) => {
              setRestaurantSelect(parseInt(event.target.value));
            }}
          >
            {restaurantsWithPizzas.map((restaurant) => {
              return (
                <option key={restaurant.id} value={restaurant.id}>
                  {restaurant.name}
                </option>
              );
            })}
          </select>
          {" ?"}
        </h4>
      </div>
      <div>
        <ul>
          {pizzasSoldBySelectedRestaurant.map((pizza) => {
            return <li key={pizza.id}>{pizza.name}</li>;
          })}
        </ul>
      </div>
      <div>
        <h4>
          {"Who sells "}
          <select
            value={pizzaSelect}
            onChange={(event) => {
              setPizzaSelect(event.target.value);
            }}
          >
            {pizzas.map((pizza) => {
              return (
                <option key={pizza.id} value={pizza.id}>
                  {pizza.name}
                </option>
              );
            })}
          </select>
          {" ?"}
        </h4>
      </div>
      <div>
        <ul>
          {restaurantsThatSellSelectedPizza.map((restaurant) => {
            return <li key={restaurant.id}>{restaurant.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
