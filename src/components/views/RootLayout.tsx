import { ThemeProvider } from "react-jss";
import { useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { themeDark, themeLight } from "@Components/styles/theme";
import ViewLayout from "./ViewLayout";

const RootLayout = () => {
  const selectedTheme = useSelector((state: RootState) => state.theme);
  const myTheme = selectedTheme.theme === "light" ? themeLight : themeDark;

  return (
    <ThemeProvider theme={myTheme}>
      <ViewLayout />
    </ThemeProvider>
  );
};
export default RootLayout;
