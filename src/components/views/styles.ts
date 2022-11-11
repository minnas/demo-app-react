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
type RuleTitleNames = "title";
type RuleLayoutNames = "layout";
type RuleListItemNames = "listItem";

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
