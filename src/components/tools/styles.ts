import {
  Itheme,
  layoutFlexColumn,
  layoutFlexRow,
} from "@Components/styles/theme";
import { createUseStyles } from "react-jss";
import { ButtonProps } from "./Button";

type RuleButtonNames = "button";
type RuleSpinnerNames = "spinner";
type RuleToastNames = "toast";
type RuleDropDownNames = "wrapper" | "toggle" | "content";
type RulePlaceholderNames = "wrapper" | "icon" | "content";

export const useButtonStyles = createUseStyles<
  RuleButtonNames,
  ButtonProps,
  Itheme
>({
  button: ({ theme, ...props }) => ({
    ...layoutFlexRow,
    padding: props.padding || "1rem 1.2rem",
    border: props.border || `1px solid ${theme?.highlightColor}`,
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    backgroundColor: "transparent",
    color: theme?.highlightColor,
    fontSize: "1.6rem",
    margin: props.margin || "unset",
    animation: props.animation || "unset",
    alignSelf: props.alignSelf || "unset",
    "&:hover": {
      color: theme?.highlightColor6,
      cursor: "pointer",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      backgroundColor: theme?.highlightColor3,
    },
  }),
});
export const useSpinnerStyles = createUseStyles<RuleSpinnerNames, Itheme>({
  spinner: (theme) => ({
    animation: "spin infinite 5s linear",
    color: theme?.highlightColor,
    fontSize: "10rem",
    position: "fixed",
    left: "45vw",
    top: "35vh",
    zIndex: 99,
  }),
});
export const useToastStyles = createUseStyles<RuleToastNames, Itheme>({
  toast: (theme) => ({
    ...layoutFlexRow,
    transition: "all 0.25s ease",
    color: theme?.bgColor,
    backgroundColor: theme?.highlightColor6,
    fontSize: "2.5rem",
    position: "fixed",
    left: "40vw",
    top: "15vh",
    border: `2px dashed ${theme?.highlightColor}`,
    zIndex: 99,
    padding: "1.5rem 2rem",
    fontWeight: "600",
    borderRadius: "10px",
  }),
});
export const useDropDownStyles = createUseStyles<RuleDropDownNames, Itheme>({
  wrapper: (theme) => ({
    ...layoutFlexColumn,
    color: theme?.bgColor,
    backgroundColor: theme.bgColor,
    fontSize: "2.5rem",
    transition: "all 0.25s ease",
    position: "relative",
  }),
  toggle: (theme) => ({}),
  content: (theme) => ({
    ...layoutFlexColumn,
    position: "absolute",
    top: 0,
    zIndex: 999,
    alignItems: "center",
    width: "100%",
    border: `2px dashed ${theme?.highlightColor}`,
  }),
});
export const usePlaceholderStyles = createUseStyles<
  RulePlaceholderNames,
  Itheme
>({
  wrapper: (theme) => ({
    ...layoutFlexRow,
    justifyContent: "center",
    gridColumnGap: "2rem",
    color: theme.highlightColor,
    animation: "fadeIn 1s ease-in",
    padding: "2rem",
  }),
  icon: (theme) => ({
    fontSize: "3rem",
    color: theme.highlightColor,
  }),
  content: (theme) => ({
    fontSize: "2rem",
    color: theme.highlightColor,
  }),
});
