import { Itheme, layoutFlexRow } from "@Components/styles/theme";
import { createUseStyles } from "react-jss";

type RuleButtonNames = "button";
type RuleSpinnerNames = "spinner";
type RuleToastNames = "toast";

export const useButtonStyles = createUseStyles<RuleButtonNames, Itheme>({
  button: (theme) => ({
    ...layoutFlexRow,
    padding: "1rem 1.2rem",
    border: `1px solid ${theme.highlightColor}`,
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    backgroundColor: "transparent",
    color: theme.highlightColor,
    fontSize: "1.6rem",
    "&:hover": {
      color: theme.highlightColor6,
      cursor: "pointer",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      backgroundColor: theme.highlightColor3,
    },
  }),
});
export const useSpinnerStyles = createUseStyles<RuleSpinnerNames, Itheme>({
  spinner: (theme) => ({
    animation: "spin infinite 5s linear",
    color: theme.highlightColor,
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
    color: theme.bgColor,
    backgroundColor: theme.highlightColor6,
    fontSize: "2.5rem",
    position: "fixed",
    left: "40vw",
    top: "15vh",
    border: `2px dashed ${theme.highlightColor}`,
    zIndex: 99,
    padding: "1.5rem 2rem",
    fontWeight: "600",
    borderRadius: "10px",
  }),
});
