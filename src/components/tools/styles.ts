import { createUseStyles } from "react-jss";
import { Styles } from "jss";
import { colors, layoutFlexRow } from "@Components/styles/theme";

export type ButtonClassNames = "button";
export type ButtonStyles = Styles<ButtonClassNames>;

export type SpinnerClassNames = "spinner";
export type SpinnerStyles = Styles<SpinnerClassNames>;

export type ToastClassNames = "toast";
export type ToastStyles = Styles<ToastClassNames>;

const getButtonStyles: ButtonStyles = {
  button: () => ({
    ...layoutFlexRow,
    padding: "1rem 1.2rem",
    border: `1px solid ${colors.highlightColor}`,
    borderRadius: "15px",
    cursor: "pointer",
    transition: "all 0.25s ease",
    backgroundColor: "transparent",
    color: colors.highlightColor,
    fontSize: "1.6rem",
    "&:hover": {
      color: colors.highlightColor6,
      cursor: "pointer",
    },
    "&[disabled]": {
      cursor: "not-allowed",
      backgroundColor: colors.highlightColor3,
    },
  }),
};

const getSpinnerStyles: SpinnerStyles = {
  spinner: () => ({
    animation: "spin infinite 5s linear",
    color: colors.highlightColor,
    fontSize: "10rem",
    position: "fixed",
    left: "45vw",
    top: "35vh",
    zIndex: 99,
  }),
};

const getToastStyles: ToastStyles = {
  toast: () => ({
    ...layoutFlexRow,
    transition: "all 0.25s ease",
    color: colors.bgColor,
    backgroundColor: colors.highlightColor6,
    fontSize: "2.5rem",
    position: "fixed",
    left: "40vw",
    top: "15vh",
    border: `2px dashed ${colors.highlightColor}`,
    zIndex: 99,
    padding: "1.5rem 2rem",
    fontWeight: "600",
    borderRadius: "10px",
  }),
};

export const useButtonStyles = createUseStyles(getButtonStyles);
export const useSpinnerStyles = createUseStyles(getSpinnerStyles);
export const useToastStyles = createUseStyles(getToastStyles);
