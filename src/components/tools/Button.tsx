import { MouseEventHandler, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useButtonStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

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
  const theme = useTheme<Itheme>();
  const styles = useButtonStyles(theme);

  return (
    <button className={styles.button} disabled={disabled} onClick={onClick}>
      {icon ? <FontAwesomeIcon icon={icon} size="lg" /> : ""}
      {label === undefined ? "" : <span>{label}</span>}
    </button>
  );
};

export default Button;
