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
import { themeDark, themeLight } from "@Components/styles/theme";
import ViewLayout from "@Components/views/ViewLayout";
function App() {
  const content = (
    <>
      {" "}
      <Header />
      <div style={{ overflowY: "scroll" }}>
        <Routes>
          <Route path="/" element={<FakePosts />} />
          <Route path="/todos" element={<FakeTodos />} />
          <Route path="/bookmarks" element={<FakeBookmarks />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={themeDark}>
            <ViewLayout children={content} />
          </ThemeProvider>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
