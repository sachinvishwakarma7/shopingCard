import { Provider } from "react-redux";
import store from "./Components/React-Redux/ProductStore"
import CustomRouter from "./Components/Router/CustomRouter";
import './App.css'
function App() {
  return (
    <Provider store={store}>
      <div className='backgroud'>
        <CustomRouter />
      </div>
    </Provider>
  );
}

export default App;
