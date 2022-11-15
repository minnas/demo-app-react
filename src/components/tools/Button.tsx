import { MouseEventHandler, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useButtonStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

export interface ButtonProps {
  icon?: IconProp;
  disabled?: boolean;
  label?: string;
  padding?: string;
  border?: string;
  margin?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ ...props }: ButtonProps): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = useButtonStyles({ ...props, theme });

  return (
    <button
      className={styles.button}
      disabled={props.disabled}
      onClick={props.onClick}
    >
      {props.icon ? <FontAwesomeIcon icon={props.icon} size="lg" /> : ""}
      {props.label === undefined ? "" : <span>{props.label}</span>}
    </button>
  );
};

export default Button;
