import { Itheme } from "@Components/styles/theme";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "react-jss";
import { useSpinnerStyles } from "./styles";

const Spinner = () => {
  const theme = useTheme<Itheme>();
  const styles = useSpinnerStyles(theme);
  return (
    <FontAwesomeIcon className={styles.spinner} icon={faSpinner} size="lg" />
  );
};

export default Spinner;
