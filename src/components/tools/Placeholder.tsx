import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePlaceholderStyles } from "./styles";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

export type PlaceholderProps = {
  content?: React.ReactNode;
};

const Placeholder = ({ content }: PlaceholderProps): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = usePlaceholderStyles(theme);

  return (
    <div className={styles.wrapper}>
      <FontAwesomeIcon className={styles.icon} icon={faDog} size="lg" />
      <span className={styles.content}>{content}</span>
      <FontAwesomeIcon
        className={styles.icon}
        style={{ transform: "rotateY(-180deg)" }}
        icon={faDog}
        size="lg"
      />
    </div>
  );
};

export default Placeholder;
