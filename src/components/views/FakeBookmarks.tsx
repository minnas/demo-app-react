import { ReactElement, useState } from "react";
import { useContentStyles } from "./styles";
import { Item } from "@Types/types";
import Card from "@Components/tools/Card";
import { faTimes, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { removeBookmark } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const FakeTodos = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const [toastVisible, setToastVisible] = useState(false);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const profiIcon = faUserGraduate;

  const remove = (item: Item) => {
    dispatch(removeBookmark({ id: item.id }));
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };

  const body = (item: Item) => (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gridColumnGap: "0.5rem",
      }}
    >
      <span>{item.title}</span>
      <Button
        icon={faTimes}
        onClick={() => remove(item)}
        border="none"
        padding="0"
      />
    </div>
  );

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message="Removed !" /> : ""}
      {bookmarks.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeTodos;
