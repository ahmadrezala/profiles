import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import Users from "./pages/Users";

function App() {
  return (
    <Provider store={store}>
      <Users />
    </Provider>
  );
}

export default App;
