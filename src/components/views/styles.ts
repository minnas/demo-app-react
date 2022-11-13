import { createUseStyles } from "react-jss";
import {
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type RuleFooterNames = "footer";
type RuleHeaderNames = "header";
type RuleContentNames = "content";
type RuleItemNames = "item";
type RuleTitleNames = "title" | "icon";
type RuleLayoutNames = "layout";
type RuleListItemNames = "listItem";
type RulePaintNames = "wrapper" | "tools" | "color" | "canvas";

export const useFooterStyles = createUseStyles<RuleFooterNames, Itheme>({
  footer: (theme) => ({
    ...layoutFlexRow,
    justifyContent: "space-evenly",
    padding: "1rem 2rem",
    flexWrap: "wrap",
    color: theme?.highlightColor,
    marginTop: "auto",
  }),
});
export const useHeaderStyles = createUseStyles<RuleHeaderNames, Itheme>({
  header: (theme) => ({
    padding: "1rem 2rem",
    ...layoutFlexRow,
    justifyContent: "center",
    gridColumnGap: "2rem",
    borderBottom: `4px dashed ${theme?.highlightColor8}`,
    color: theme?.highlightColor,
  }),
});
export const useContentStyles = createUseStyles<RuleContentNames, Itheme>({
  content: (theme) => ({
    ...layoutFlexColumn,
    padding: "1rem 2rem",
    maxWidth: "1200px",
    transition: "all 0.25s ease",
    width: "auto",
    margin: "auto",
  }),
});
export const useTitleStyles = createUseStyles<RuleTitleNames, Itheme>({
  title: (theme) => ({
    fontSize: "2rem",
    color: theme?.highlightColor,
  }),
  icon: (theme) => ({
    boxShadow: `${theme.highlightColor5} 0 10px 1rem`,
    borderRadius: "15px",
    padding: "0 5px",
  }),
});
export const useItemStyles = createUseStyles<RuleItemNames, Itheme>({
  item: (theme) => ({
    ...layoutFlexRow,
    transition: "all 0.25s ease",
    padding: "1rem 2rem",
    color: theme?.highlightColor,
    fontSize: "2rem",
    lineHeight: "2rem",
    cursor: "pointer",
  }),
});
export const useLayoutStyles = createUseStyles<RuleLayoutNames, Itheme>({
  layout: (theme) => ({
    color: theme?.highlightColor,
    backgroundColor: theme?.bgColor,
    display: "flex",
    flexDirection: "column",
    width: "100vw",
    height: "100vh",
  }),
});
export const useListItemStyles = createUseStyles<RuleListItemNames, Itheme>({
  listItem: (theme) => ({
    ...layoutFlexRow,
  }),
});
export const usePaintStyles = createUseStyles<RulePaintNames, Itheme>({
  wrapper: (theme) => ({
    ...layoutFlexColumn,
    alignItems: "center",
    gridRowGap: "2rem",
    paddingTop: "2rem",
  }),
  tools: (theme) => ({
    ...layoutFlexRow,
    maxWidth: "600px",
  }),
  color: (theme) => ({
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    border: "2px solid #000",
    "&:hover": {
      opacity: "0.4",
      cursor: "pointer",
    },
  }),
  canvas: (theme) => ({
    width: "500px",
    height: "300px",
    margin: "auto",
    border: `2px dashed ${theme.highlightColor}`,
  }),
});
