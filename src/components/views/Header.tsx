import { ReactElement } from "react";
import { useHeaderStyles, useTitleStyles } from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRainbow, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import Button from "@Components/tools/Button";
import { toggle } from "@Store/dataSlices";
import { useTranslation } from "react-i18next";
import DropDown, { ListItem } from "@Components/tools/DropDown";

const Header = (): ReactElement => {
  const selectedTheme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();
  const theme = useTheme<Itheme>();
  const styles = useHeaderStyles(theme);
  const titleStyles = useTitleStyles(theme);
  const { t, i18n } = useTranslation();
  const locales = ["en", "fi"];
  const toggleTheme = () => {
    dispatch(toggle());
  };

  const langItems = locales.map(
    (lang: string) =>
      ({
        value: lang,
        label: lang.toUpperCase(),
        callback: () => {
          i18n.changeLanguage(lang);
        },
      } as ListItem)
  );

  return (
    <div className={styles.header}>
      <FontAwesomeIcon
        icon={faRainbow}
        className={titleStyles.title + " " + titleStyles.icon}
      />
      <h1 className={titleStyles.title}>{t("app-title")}</h1>
      <Button
        icon={selectedTheme.theme === "light" ? faMoon : faSun}
        border="none"
        padding="0"
        onClick={toggleTheme}
      />
      <DropDown selected={langItems.at(0)?.label} items={langItems} />
    </div>
  );
};

export default Header;
