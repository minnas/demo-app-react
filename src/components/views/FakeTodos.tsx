import { ReactElement, useEffect, useState } from "react";
import { useContentStyles } from "./styles";
import { ApiType, search } from "@Api/api";
import { Bookmark, Item, RawItem } from "@Types/types";
import Spinner from "@Components/tools/Spinner";
import Card from "@Components/tools/Card";
import {
  faMinus,
  faPlus,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { addBookmark, removeBookmark } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const FakeTodos = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const dispatch = useDispatch();
  const bookmarks = useSelector((state: RootState) => state.bookmarks);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("Saved !");
  const [todos, setTodos] = useState([] as Item[]);
  const [loading, setLoading] = useState(false);
  const profiIcon = faUserSecret;

  const add = (item: Item) => {
    if (bookmarks.find((b) => b.externalId === item.id)) {
      return;
    }
    dispatch(
      addBookmark({
        ...(item as RawItem),
        externalId: item.id,
      } as Bookmark)
    );
    setToastMsg("Saved !");
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };
  const remove = (item: Item) => {
    dispatch(
      removeBookmark({
        id: bookmarks.find((b) => b.externalId === item.id)?.id,
      })
    );
    setToastVisible(true);
    setToastMsg("Removed !");
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };
  const inBookmarks = (item: Item) =>
    bookmarks.find((b) => b.externalId === item.id) != undefined;

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
        icon={inBookmarks(item) ? faMinus : faPlus}
        padding="0"
        border="none"
        onClick={() => (inBookmarks(item) ? remove(item) : add(item))}
      />
    </div>
  );

  useEffect(() => {
    setLoading(true);
    search(ApiType.TODOS)
      .then((items) => {
        setTimeout(() => {
          setTodos(items as Item[]);
          setLoading(false);
        }, 400);
      })
      .catch((e: Error) => {
        console.log("Something went wrong here " + e);
        setLoading(false);
      });
  }, []);

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message={toastMsg} /> : ""}
      {loading ? <Spinner /> : ""}
      {todos.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeTodos;
