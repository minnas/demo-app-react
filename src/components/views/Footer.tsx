import { ReactElement } from "react";
import { useFooterStyles } from "./styles";
import { Page, pages } from "@Api/api";
import Button from "@Components/tools/Button";
import { useNavigate } from "react-router-dom";

const Footer = (): ReactElement => {
  const styles = useFooterStyles();
  const navigate = useNavigate();

  const goToPage = (item: Page) => {
    console.log("Go to my page " + item.path);
    navigate(item.path);
  };

  return (
    <div className={styles.footer}>
      {pages.map((item: Page, index: number) => (
        <Button icon={item.icon} key={index} onClick={() => goToPage(item)} />
      ))}
    </div>
  );
};

export default Footer;
