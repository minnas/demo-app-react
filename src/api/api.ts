import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faBookJournalWhills,
  faBookmark,
  faBug,
  faDolly,
  faGifts,
  faPaintBrush,
  faRainbow,
  faShop,
} from "@fortawesome/free-solid-svg-icons";

const randomApi = "https://jsonplaceholder.typicode.com";
const fakeProductsApi = "https://fakestoreapi.com/products";

export const search = async (type?: ApiType) => {
  const prefix = type && type == ApiType.TODOS ? "todos" : "posts";
  const apiUrl =
    type && type == ApiType.PRODUCTS
      ? fakeProductsApi
      : `${randomApi}/${prefix}`;

  return await fetch(apiUrl, {
    headers: { "Access-Control-Allow-Origin": "*" },
    method: "GET",
  })
    .then((res) => {
      return res.json();
    })
    .catch((e) => {
      throw new Error(`Failed to fetch ${type?.toString() || prefix} from api`);
    });
};

export enum ApiType {
  POSTS = "posts",
  TODOS = "todos",
  PRODUCTS = "products",
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
  { path: "/shop", icon: faGifts },
  { path: "/order", icon: faDolly },
];
