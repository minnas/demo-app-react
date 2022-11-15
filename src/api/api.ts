import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBookJournalWhills,
  faBookmark,
  faBug,
  faPaintBrush,
  faRainbow,
} from "@fortawesome/free-solid-svg-icons";

const randomApi = "https://jsonplaceholder.typicode.com";

export const search = async (type?: ApiType) => {
  let prefix = "posts";

  if (type && type == ApiType.TODOS) {
    prefix = "todos";
  }
  return await fetch(`${randomApi}/${prefix}`, {
    headers: { "Access-Control-Allow-Origin": "*" },
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      throw new Error(`Failed to fetch ${prefix} from api`);
    });
};

export enum ApiType {
  POSTS = "posts",
  TODOS = "todos",
}

export type Page = {
  path: string;
  icon: IconProp;
};

export const pages: Page[] = [
  { path: "/", icon: faRainbow },
  { path: "/todos", icon: faBug },
  { path: "/bookmarks", icon: faBookmark },
  { path: "/paint", icon: faPaintBrush },
  { path: "/notes", icon: faBookJournalWhills },
];
