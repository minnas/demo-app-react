import { ReactElement } from "react";
import { useState } from "react";
import { Itheme } from "@Components/styles/theme";
import { useTheme } from "react-jss";
import { useDropDownStyles } from "./styles";
import Button from "./Button";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type ListItem = {
  label?: string;
  icon?: IconProp;
  callback?: Function;
  value?: string | number;
};
export type DropDownProps = {
  selected?: string;
  items?: ListItem[];
};

const DropDownProps = ({ selected, items }: DropDownProps): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesAccordion = useDropDownStyles(theme);
  const [current, setCurrent] = useState(selected);
  const [show, setShow] = useState(false);

  const styles = !show
    ? { opacity: 1 }
    : {
        opacity: 0,
      };

  const itemClick = (item: ListItem) => {
    if (item.callback) {
      item.callback();
    }
    setCurrent(item.label || "");
    setShow(false);
  };

  const itemButton = items?.map((item: ListItem, index: number) => (
    <Button
      key={index}
      icon={item.icon}
      label={item.label}
      border="none"
      padding={"0.2rem 2rem"}
      onClick={() => itemClick(item)}
    />
  ));

  return (
    <div className={stylesAccordion.wrapper}>
      <div style={styles}>
        <Button
          onClick={() => setShow(!show)}
          label={current}
          padding={"0.2rem 2rem"}
        />
      </div>
      {show ? <div className={stylesAccordion.content}>{itemButton}</div> : ""}
    </div>
  );
};

export default DropDownProps;
