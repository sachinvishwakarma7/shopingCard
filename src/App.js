import { Provider } from "react-redux";
import store from "./Components/React-Redux/ProductStore"
import CustomRouter from "./Components/Router/CustomRouter";
function App() {
  return (
    <Provider store={store}>
      <div>
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
