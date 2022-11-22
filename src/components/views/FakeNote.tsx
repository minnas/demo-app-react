import { ReactElement, useState } from "react";
import { useContentStyles, useListItemStyles } from "./styles";
import { Item, RawItem, Todo } from "@Types/types";
import Card from "@Components/tools/Card";
import {
  faPlus,
  faTimes,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import Button from "@Components/tools/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@Store/store";
import { add as addTodo, remove as removeTodo } from "@Store/dataSlices";
import Toast from "@Components/tools/Toast";
import { useTheme } from "react-jss";
import { Itheme } from "@Components/styles/theme";
import { useTranslation } from "react-i18next";
import Placeholder from "@Components/tools/Placeholder";

const FakeNote = (): ReactElement => {
  const { t } = useTranslation();
  const theme = useTheme<Itheme>();
  const stylesContent = useContentStyles(theme);
  const stylesItem = useListItemStyles(theme);
  const dispatch = useDispatch();
  const notes = useSelector((state: RootState) => state.todos);
  const [toastVisible, setToastVisible] = useState(false);
  const [toastMsg, setToastMsg] = useState(t("toast-msg-save"));
  const [noteVisible, setNoteVisible] = useState(false);
  const profiIcon = faUserAstronaut;

  const add = (item: RawItem) => {
    dispatch(
      addTodo({
        ...item,
      } as Todo)
    );
    setToastMsg(t("toast-msg-save"));
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
    setToastMsg(t("toast-msg-remove"));
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
      title: content.length > 10 ? content.substring(0, 10) + "..." : content,
      body: content,
    } as RawItem);
    setToastMsg(t("toast-msg-add"));

    setToastVisible(true);
    setNoteVisible(false);
    setTimeout(() => {
      setToastVisible(false);
    }, 600);
  };

  return (
    <div className={stylesContent.content}>
      {toastVisible ? <Toast message={toastMsg || ""} /> : ""}
      <div className={stylesContent.newItem}>
        {noteVisible ? (
          <>
            <textarea
              className={stylesContent.textarea}
              onKeyDown={save}
              rows={5}
              placeholder={t("new-note-placeholder")}
            ></textarea>
            <Button
              icon={faTimes}
              alignSelf="baseline"
              onClick={() => setNoteVisible(false)}
              animation="fadeIn 1s ease-in"
            />
          </>
        ) : (
          <Button
            icon={faPlus}
            onClick={() => setNoteVisible(true)}
            label={t("new-note-add-btn")}
            margin="auto"
            animation="fadeIn 1s ease-in"
          />
        )}
      </div>
      {notes.length < 1 ? (
        <Placeholder content={t("no-notes-placeholder")} />
      ) : (
        ""
      )}
      {notes.map((item: Item, index: number) => (
        <Card key={index} {...{ ...item, body: body(item), profiIcon }} />
      ))}
    </div>
  );
};
export default FakeNote;
