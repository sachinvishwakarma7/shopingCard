import AddToCart from "./Components/AddToCart";
import { Provider } from "react-redux";
import store from "./Components/React-Redux/ProductStore"

function App() {
  return (
    <Provider store={store}> 
      <div>
        <AddToCart />
      </div>
    </Provider>
  );
}

export default App;
