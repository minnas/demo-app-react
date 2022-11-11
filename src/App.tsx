import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@Store/store";
import RootLayout from "@Components/views/RootLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <RootLayout />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
