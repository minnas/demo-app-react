export const colors = {
  highlightColor: "rgba(148, 104, 254, 1)",
  highlightColor8: "rgba(148, 104, 254, .8)",
  highlightColor6: "rgba(148, 104, 254, .6)",
  highlightColor5: "rgba(148, 104, 254, .5)",
  highlightColor3: "rgba(148, 104, 254, .3)",
  highlightColor2: "rgba(148, 104, 254, .2)",
  textColor: "rgba(255, 255, 255, 1)",
  btnColor: "rgba(255, 255, 255, 1)",
  shadowColor6: "rgba(0, 0, 0, .6)",
  shadowColor8: "rgba(0, 0, 0, .8)",
  bgColor: "#242424",
};
export const colors2 = {
  highlightColor: "rgba(0, 102, 204, 1)",
  highlightColor8: "rgba(0, 102, 204, .8)",
  highlightColor6: "rgba(0, 102, 204, .6)",
  highlightColor5: "rgba(0, 102, 204, .5)",
  highlightColor3: "rgba(0, 102, 204, .3)",
  highlightColor2: "rgba(0, 102, 204, .2)",
  textColor: "rgba(0, 102, 204, 1)",
  btnColor: "rgba(0,0,0, .8)",
  shadowColor6: "rgba(0, 0, 0, .6)",
  shadowColor8: "rgba(0, 0, 0, .8)",
  bgColor: "#ffffff",
};

export const layoutFlexRow = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  gridColumnGap: "1.5rem",
};
export const layoutFlexColumn = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gridRowCap: "0.5rem",
};
export interface Itheme {
  highlightColor: string;
  highlightColor8: string;
  highlightColor6: string;
  highlightColor5: string;
  highlightColor3: string;
  highlightColor2: string;
  textColor: string;
  btnColor: string;
  shadowColor6: string;
  shadowColor8: string;
  bgColor: string;
}
export const themeDark: Itheme = {
  ...colors,
};
export const themeLight: Itheme = {
  ...colors2,
};
