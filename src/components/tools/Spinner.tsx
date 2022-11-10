import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSpinnerStyles } from "./styles";

const Spinner = () => {
  const styles = useSpinnerStyles();
  return (
    <FontAwesomeIcon className={styles.spinner} icon={faSpinner} size="lg" />
  );
};

export default Spinner;
