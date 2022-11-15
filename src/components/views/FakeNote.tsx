import { ReactElement, useState } from "react";
import { useContentStyles, useListItemStyles } from "./styles";
import { Item, RawItem, Todo } from "@Types/types";
import Card from "@Components/tools/Card";
import {
  faPlus,
  faTimes,
  faUserSecret,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { add as addTodo, remove as removeTodo } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";

const FakeNote = (): ReactElement => {
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const stylesItem = useListItemStyles(theme);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.todos);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState("Saved !");
  const [noteVisible, setNoteVisible] = useState(false);
  const profiIcon = faUserSecret;

  const add = (item: RawItem) => {
    dispatch(
      addTodo({
        ...item,
      } as Todo)
    );
    setToastMsg("Saved !");
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };
  const remove = (item: Item) => {
    dispatch(
      removeTodo({
        id: notes.find((b) => b.id === item.id)?.id,
      })
    );
    setToastVisible(true);
    setToastMsg("Removed !");
    setTimeout(() => {
      setToastVisible(false);
    }, 800);
  };

  const body = (item: Item) => (
    <div className={stylesItem.listItem}>
      <span>{item.body}</span>
      <Button
        icon={faTimes}
        padding="0"
        border="none"
        onClick={() => remove(item)}
      />
    </div>
  );

  const save = (e: any) => {
    const event = e as KeyboardEvent;
    if (event.key.toLocaleLowerCase() !== "enter") {
      return;
    }
    const content = e.target.value as string;
    add({
      title: content.length > 10 ? content.substring(0, 10) : content,
      body: content,
    } as RawItem);
    setToastMsg("Added!");
    setToastVisible(true);
    setNoteVisible(false);
    setTimeout(() => {
      setToastVisible(false);
    }, 600);
  };

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message={toastMsg} /> : ""}
      <div className={stylesContent.newItem}>
        {noteVisible ? (
          <textarea
            className={stylesContent.textarea}
            onKeyDown={save}
            rows={5}
            placeholder="a new note or todo. Save by Enter"
          ></textarea>
        ) : (
          <Button
            icon={faPlus}
            onClick={() => setNoteVisible(true)}
            label="Add Note/Todo"
            margin="auto"
          />
        )}
      </div>
      {notes.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeNote;
