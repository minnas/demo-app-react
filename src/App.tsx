import Header from "@Components/views/Header";
import Footer from "@Components/views/Footer";
import FakePosts from "@Components/views/FakePosts";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@Store/store";
import FakeTodos from "@Components/views/FakeTodos";
import FakeBookmarks from "@Components/views/FakeBookmarks";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Header />
          <div style={{ overflowY: "scroll" }}>
            <Routes>
              <Route path="/" element={<FakePosts />} />
              <Route path="/todos" element={<FakeTodos />} />
              <Route path="/bookmarks" element={<FakeBookmarks />} />
            </Routes>
          </div>
          <Footer />
        </Provider>
      </Router>
    </div>
  );
}

export default App;
