import { MouseEventHandler, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useButtonStyles } from "./styles";

export type ButtonProps = {
  icon?: IconProp;
  disabled?: boolean;
  label?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const Button = ({
  icon,
  label,
  disabled,
  onClick,
}: ButtonProps): ReactElement => {
  const styles = useButtonStyles();

  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {icon ? <FontAwesomeIcon icon={icon} size="lg" /> : ""}
      {label === undefined ? "" : <span>{label}</span>}
    </button>
  );
};

export default Button;
