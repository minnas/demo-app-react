import { ThemeProvider } from "react-jss";
import { useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { themeDark, themeLight } from "@Components/styles/theme";
import RoutesLayout from "./RoutesLayout";

const ThemeLayout = () => {
  const selectedTheme = useSelector((state: RootState) => state.theme);
  const myTheme = selectedTheme.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={myTheme}>
      <RoutesLayout />
    </ThemeProvider>
  );
};
export default ThemeLayout;
