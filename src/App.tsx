import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@Store/store";
import ThemeLayout from "@Components/views/ThemeLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <ThemeLayout />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
