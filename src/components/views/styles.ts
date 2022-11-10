import { createUseStyles } from "react-jss";
import { Styles } from "jss";
import {
  colors,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type FooterClassNames = "footer";
type FooterStyles = Styles<FooterClassNames>;
type HeaderClassNames = "header";
type HeaderStyles = Styles<HeaderClassNames>;
type ContentClassNames = "content";
type ContentStyles = Styles<ContentClassNames>;
type TitleClassNames = "title";
type TitleStyles = Styles<TitleClassNames>;
type ItemClassNames = "item";
type ItemStyles = Styles<ItemClassNames>;

const getFooterStyles: FooterStyles = {
  footer: () => ({
    ...layoutFlexRow,
    justifyContent: "space-evenly",
    padding: "1rem 2rem",
    flexWrap: "wrap",
    color: colors.highlightColor,
    marginTop: "auto",
  }),
};
const getHeaderStyles: HeaderStyles = {
  header: () => ({
    padding: "1rem 2rem",
    ...layoutFlexRow,
    justifyContent: "center",
    gridColumnGap: "2rem",
    borderBottom: `4px dashed ${colors.highlightColor8}`,
    color: colors.highlightColor,
  }),
};
const getContentStyles: ContentStyles = {
  content: () => ({
    ...layoutFlexColumn,
    padding: "1rem 2rem",
    maxWidth: "1200px",
    transition: "all 0.25s ease",
    width: "auto",
    margin: "auto",
  }),
};
const getTitleStyles: TitleStyles = {
  title: () => ({
    fontSize: "2rem",
    color: colors.highlightColor,
  }),
};
const getItemStyles: ItemStyles = {
  item: () => ({
    ...layoutFlexRow,
    transition: "all 0.25s ease",
    padding: "1rem 2rem",
    color: colors.highlightColor,
    fontSize: "2rem",
    lineHeight: "2rem",
    cursor: "pointer",
  }),
};
export const useFooterStyles = createUseStyles(getFooterStyles);
export const useHeaderStyles = createUseStyles(getHeaderStyles);
export const useContentStyles = createUseStyles(getContentStyles);
export const useTitleStyles = createUseStyles(getTitleStyles);
export const useItemStyles = createUseStyles(getItemStyles);
