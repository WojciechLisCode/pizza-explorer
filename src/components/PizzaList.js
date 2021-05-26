// src/components/PizzaList.js
// import userEvent from "@testing-library/user-event";
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectAllPizzas } from "../store/pizzas/selectors";
import { useDispatch } from "react-redux";
import { toggleFavorite } from "../store/user/actions";

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectAllPizzas);

  const dispatch = useDispatch();
  const favoriteButton = (id) => {
    let newFavList = [];
    user.favorites.includes(id)
      ? (newFavList = user.favorites.filter((item) => item !== id))
      : (newFavList = [...user.favorites, id]);
    dispatch(toggleFavorite(newFavList));
  };
  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>
      </p>
      <h2>List of pizzas:</h2>
      <ul>
        {pizzas.map((pizza) => {
          let isFavorite = "";
          if (user.favorites.includes(pizza.id)) {
            isFavorite = "♥";
          } else {
            isFavorite = "♡";
          }
          return (
            <li key={pizza.id}>
              <h3>
                {pizza.name}
                <button onClick={() => favoriteButton(pizza.id)}>
                  {isFavorite}
                </button>
              </h3>
              <p>{pizza.description}</p>
              <p>{`Bought ${pizza.bought} times.`}</p>
            </li>
          );
        })}
      </ul>
      <p>Pizza types total:{pizzas.length}</p>
    </div>
  );
}
