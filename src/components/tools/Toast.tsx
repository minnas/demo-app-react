import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useToastStyles } from "./styles";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

export type ToastProps = {
  icon?: IconProp;
  message: string;
};

const Toast = ({ icon, message }: ToastProps): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = useToastStyles(theme);

  return (
    <div className={styles.toast}>
      <span>{message}</span>
      <FontAwesomeIcon icon={icon || faMagicWandSparkles} />
    </div>
  );
};

export default Toast;
