import { ReactElement } from "react";
import { useHeaderStyles, useTitleStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow } from "@fortawesome/free-solid-svg-icons";

const Header = (): ReactElement => {
  const styles = useHeaderStyles();
  const titleStyles = useTitleStyles();
  return (
    <div className={styles.header}>
      <FontAwesomeIcon icon={faRainbow} className={titleStyles.title} />
      <h1 className={titleStyles.title}>Small Demo with React + Vite + TS</h1>
    </div>
  );
};

export default Header;
