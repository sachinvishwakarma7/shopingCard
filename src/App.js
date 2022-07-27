import Products from "./Components/Products";
import { Provider } from "react-redux";
import store from "./Components/React-Redux/ProductStore"

function App() {
  return (
    <Provider store={store}> 
      <div>
        <Products />
      </div>
    </Provider>
  );
}

export default App;
