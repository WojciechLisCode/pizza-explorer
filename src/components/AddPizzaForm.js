// src/components/AddPizzaForm.js
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addPizza } from "../store/pizzas/actions";

export default function AddPizzaForm() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();

    dispatch(
      addPizza({
        id: Math.round(Math.random() * 1000000),
        name: name,
        description: description,
        bought: 0,
        image: "",
      })
    );
    setDescription("");
    setName("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
