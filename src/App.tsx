import Header from "@Components/views/Header";
import Footer from "@Components/views/Footer";
import FakePosts from "@Components/views/FakePosts";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@Store/store";
import FakeTodos from "@Components/views/FakeTodos";
import FakeBookmarks from "@Components/views/FakeBookmarks";
import { ThemeProvider } from "react-jss";
import { theme } from "@Components/styles/theme";
function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Header />
            <div style={{ overflowY: "scroll" }}>
              <Routes>
                <Route path="/" element={<FakePosts />} />
                <Route path="/todos" element={<FakeTodos />} />
                <Route path="/bookmarks" element={<FakeBookmarks />} />
              </Routes>
            </div>
            <Footer />
          </ThemeProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
