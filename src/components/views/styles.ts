import { createUseStyles } from "react-jss";
import {
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";

type RuleFooterNames = "footer";
type RuleHeaderNames = "header";
type RuleContentNames = "content" | "newItem" | "textarea" | "bottomline";
type RuleItemNames = "item";
type RuleTitleNames = "title" | "icon";
type RuleLayoutNames = "layout";
type RuleListItemNames = "listItem" | "image";
type RulePaintNames =
  | "wrapper"
  | "tools"
  | "color"
  | "canvas"
  | "range"
  | "size"
  | "sizeTools";

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
  newItem: (theme) => ({
    ...layoutFlexRow,
    justifyContent: "center",
    padding: "1rem 2rem",
    maxWidth: "1200px",
    transition: "all 0.25s ease",
    borderBottom: `4px dashed ${theme?.highlightColor8}`,
  }),
  textarea: (theme) => ({
    border: `2px dashed ${theme?.highlightColor8}`,
    animation: "fadeIn 1s ease-in",
    opacity: 1,
    width: "500px",
    height: "200px",
    maxWidth: "100%",
    fontSize: "1.5rem",
    background: "transparent",
    color: theme.textColor,
  }),
  bottomline: (theme) => ({
    display: "flex",
    columnGap: "1rem",
    padding: "1rem",
    position: "fixed",
    bottom: "10%",
    right: "20%",
    fontSize: "2rem",
    fontWeight: 600,
    color: theme.highlightColor,
    border: `2px dashed ${theme.highlightColor}`,
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
  image: (theme) => ({
    border: `5px dashed ${theme.highlightColor}`,
    borderRadius: "25px",
    width: "100px",
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
    maxWidth: "800px",
    flexWrap: "wrap",
    gridRowGap: "1rem",
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
    margin: "auto",
    border: `2px dashed ${theme.highlightColor}`,
  }),
  sizeTools: (theme) => ({
    display: "flex",
    flexDirection: "column",
  }),
  range: (theme) => ({
    color: theme.highlightColor,
    width: "100%",
    fontSize: "2rem",
    backgroundColor: theme.bgColor,
    "-webkit-appearance": "none",
    "&:focus": {
      outline: "none",
    },
    "&::-webkit-slider-runnable-track": {
      background: theme.highlightColor5,
    },
    "&::-moz-range-track": {
      background: theme.highlightColor5,
    },
    "&::-webkit-slider-thumb": {
      "-webkit-appearance": "none",
      width: "1rem",
      height: "2rem",
      background: theme.highlightColor,
      color: theme.highlightColor,
      borderColor: theme.highlightColor2,
    },
    "&::-moz-range-thumb": {
      width: "1rem",
      height: "2rem",
      background: theme.highlightColor,
      color: theme.highlightColor,
      borderColor: theme.highlightColor2,
    },
    "&:not(input[disabled]):hover": {
      cursor: "pointer",
      opacity: "0.8",
    },
    "&:is(input[disabled])": {
      opacity: "0.5",
    },
  }),
  size: (theme) => ({
    fontSize: "2rem",
    fontStyle: "italic",
    paddingTop: "2rem",
  }),
});
