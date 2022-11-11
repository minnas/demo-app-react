import { createUseStyles } from "react-jss";
import { Styles } from "jss";
import {
  colors,
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type RuleFooterNames = "footer";
type RuleHeaderNames = "header";
type RuleContentNames = "content";
type RuleItemNames = "item";
type RuleTitleNames = "title";

export const useFooterStyles = createUseStyles<RuleFooterNames, Itheme>({
  footer: (theme) => ({
    ...layoutFlexRow,
    justifyContent: "space-evenly",
    padding: "1rem 2rem",
    flexWrap: "wrap",
    color: theme.highlightColor,
    marginTop: "auto",
  }),
});
export const useHeaderStyles = createUseStyles<RuleHeaderNames, Itheme>({
  header: (theme) => ({
    padding: "1rem 2rem",
    ...layoutFlexRow,
    justifyContent: "center",
    gridColumnGap: "2rem",
    borderBottom: `4px dashed ${theme.highlightColor8}`,
    color: theme.highlightColor,
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
    color: theme.highlightColor,
  }),
});
export const useItemStyles = createUseStyles<RuleItemNames, Itheme>({
  item: (theme) => ({
    ...layoutFlexRow,
    transition: "all 0.25s ease",
    padding: "1rem 2rem",
    color: colors.highlightColor,
    fontSize: "2rem",
    lineHeight: "2rem",
    cursor: "pointer",
  }),
});
