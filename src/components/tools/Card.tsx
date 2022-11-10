import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import {
  faEnvelope,
  faEnvelopeOpenText,
  faUserNinja,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import { useItemStyles, useTitleStyles } from "@Components/views/styles";
import { colors } from "@Components/styles/theme";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type CardProps = {
  title?: string;
  body?: React.ReactNode;
  profiIcon?: IconProp;
};

const Card = ({ title, body, profiIcon }: CardProps): ReactElement => {
  const stylesItem = useItemStyles();
  const stylesTitle = useTitleStyles();

  const [show, setShow] = useState(true);
  const [icon, setIcon] = useState(faEnvelope);
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setIcon(show ? faEnvelope : faEnvelopeOpenText);
    setStyles(
      show
        ? {}
        : {
            backgroundColor: colors.highlightColor3,
            border: `2px dashed ${colors.highlightColor}`,
            boxShadow: `-1rem 0 0.4rem ${colors.highlightColor}`,
            margin: "1rem 0",
          }
    );
  }, [show]);

  return (
    <div
      className={stylesItem.item}
      onClick={() => setShow(!show)}
      style={styles}
    >
      <FontAwesomeIcon icon={profiIcon || faUserNinja} size="lg" />
      {show ? (
        <span className={stylesTitle.title}>{title}</span>
      ) : (
        <span className={stylesTitle.title}>{body}</span>
      )}
      <FontAwesomeIcon className={stylesTitle.title} icon={icon} size="lg" />
    </div>
  );
};

export default Card;
