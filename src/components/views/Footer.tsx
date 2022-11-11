import { ReactElement } from "react";
import { useFooterStyles } from "./styles";
import { Page, pages } from "@Api/api";
import Button from "@Components/tools/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const Footer = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const styles = useFooterStyles(theme);
  const navigate = useNavigate();
  const location = useLocation();

  const goToPage = (item: Page) => {
    console.log("Go to my page " + item.path);
    navigate(item.path);
  };

  return (
    <div className={styles.footer}>
      {pages.map((item: Page, index: number) => (
        <Button
          icon={item.icon}
          key={index}
          onClick={() => goToPage(item)}
          disabled={location.pathname === item.path}
        />
      ))}
    </div>
  );
};

export default Footer;
