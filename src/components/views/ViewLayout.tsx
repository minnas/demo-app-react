import React, { ReactElement, ReactNode } from "react";
import { useLayoutStyles } from "./styles";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const ViewLayout = ({ children }: { children: ReactNode }) => {
  const theme = useTheme<Itheme>();
  const stylesContent = useLayoutStyles(theme);

  return <div className={stylesContent.layout}>{children}</div>;
};
export default ViewLayout;
