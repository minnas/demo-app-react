import { ReactElement } from "react";
import { useHeaderStyles, useTitleStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const Header = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = useHeaderStyles(theme);
  const titleStyles = useTitleStyles(theme);

  return (
    <div className={styles.header}>
      <FontAwesomeIcon icon={faRainbow} className={titleStyles.title} />
      <h1 className={titleStyles.title}>Small Demo with React + Vite + TS</h1>
    </div>
  );
};

export default Header;
