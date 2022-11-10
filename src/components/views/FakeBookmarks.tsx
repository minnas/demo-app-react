import { ReactElement } from "react";
import { useContentStyles } from "./styles";
import { Item } from "@Types/types";
import Card from "@Components/tools/Card";
import {
  faPlus,
  faTimes,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { removeBookmark } from "@Store/dataSlices";

const FakeTodos = (): ReactElement => {
  const stylesContent = useContentStyles();
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const profiIcon = faUserGraduate;

  const remove = (item: Item) => {
    dispatch(removeBookmark({ id: item.id }));
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
      <Button icon={faTimes} onClick={() => remove(item)} />
    </div>
  );

  return (
    <div className={stylesContent.content}>
      {bookmarks.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeTodos;
