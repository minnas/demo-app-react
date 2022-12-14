import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faEnvelope,
  faEnvelopeOpenText,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { useItemStyles, useTitleStyles } from "@Components/views/styles";
import { Itheme } from "@Components/styles/theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useTheme } from "react-jss";

export type CardProps = {
  title?: string;
  body?: React.ReactNode;
  profiIcon?: IconProp;
};

const Card = ({ title, body, profiIcon }: CardProps): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesItem = useItemStyles(theme);
  const stylesTitle = useTitleStyles(theme);

  const [show, setShow] = useState(true);
  const icon = show ? faEnvelope : faEnvelopeOpenText;
  const styles = show
    ? {}
    : {
        backgroundColor: theme?.highlightColor3,
        border: `2px dashed ${theme?.highlightColor}`,
        boxShadow: `-1rem 0 0.4rem ${theme?.highlightColor}`,
        margin: "1rem 0",
      };

  return (
    <div
      className={stylesItem.item}
      onClick={() => setShow(!show)}
      style={styles}
    >
      <FontAwesomeIcon icon={profiIcon || faUserNinja} size="lg" />
      <span className={stylesTitle.title}>{show ? title : body}</span>
      <FontAwesomeIcon className={stylesTitle.title} icon={icon} size="lg" />
    </div>
  );
};

export default Card;
