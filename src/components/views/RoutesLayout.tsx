import { useLayoutStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import Header from "./Header";
import { Route, Routes } from "react-router-dom";
import FakePosts from "./FakePosts";
import FakeTodos from "./FakeTodos";
import FakeBookmarks from "./FakeBookmarks";
import Footer from "./Footer";

const RoutesLayout = () => {
  const theme = useTheme<Itheme>();
  const stylesContent = useLayoutStyles(theme);

  return (
    <div className={stylesContent.layout}>
      <Header />
      <div style={{ overflowY: "scroll" }}>
        <Routes>
          <Route path="/" element={<FakePosts />} />
          <Route path="/todos" element={<FakeTodos />} />
          <Route path="/bookmarks" element={<FakeBookmarks />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
export default RoutesLayout;