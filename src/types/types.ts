import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type Item = {
  id: string;
  title: string;
  userId?: string;
  body?: string;
};

export type RawItem = Omit<Item, "id"> & {};

type SavedItem = Item & {
  externalId: string;
};

export type Bookmark = SavedItem & {
  important?: boolean;
};

export type Todo = SavedItem & {
  done?: boolean;
};

export type Theme = {
  theme: "light" | "dark";
};

export type Product = Item & {
  price: string;
  category: string;
  description: string;
  image: string;
  externalId?: string;
};
