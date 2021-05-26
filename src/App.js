import PizzaList from "./components/PizzaList";
import RestaurantsList from "./components/RestaurantList";
import AddPizzaForm from "./components/AddPizzaForm";
function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantsList />
    </div>
  );
}

export default App;
