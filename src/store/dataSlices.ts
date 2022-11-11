import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";
import { Bookmark, Theme, Todo } from "@Types/types";

const todoSlice = createSlice({
  name: "todos",
  initialState: [] as Todo[],
  reducers: {
    add: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() } as Todo);
    },
    remove: (state, action) => {
      return state.filter((t) => t.id != action.payload.id);
    },
    update: (state, action) => {
      const index = state.findIndex((t) => t.id == (action.payload as Todo).id);
      if (index > -1) {
        state.splice(index, 1, action.payload as Todo);
      }
    },
  },
});

const bookmarkSlice = createSlice({
  name: "bookmarks",
  initialState: [] as Bookmark[],
  reducers: {
    addBookmark: (state, action) => {
      state.push({ ...action.payload, id: uuidv4() } as Bookmark);
    },
    removeBookmark: (state, action) => {
      return state.filter((t) => t.id != action.payload.id);
    },
    updateBookmark: (state, action) => {
      const index = state.findIndex(
        (t) => t.id == (action.payload as Bookmark).id
      );
      if (index > -1) {
        state.splice(index, 1, action.payload as Bookmark);
      }
    },
  },
});
const themeSlice = createSlice({
  name: "theme",
  initialState: { theme: "dark" } as Theme,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === "dark" ? "light" : "dark";
    },
  },
});

/**reducers */
export const myTodoReducer = todoSlice.reducer;
export const bookmarkReducer = bookmarkSlice.reducer;
export const themeReducer = themeSlice.reducer;
/**actions */
export const { add, update, remove } = todoSlice.actions;
export const { toggle } = themeSlice.actions;
export const { addBookmark, updateBookmark, removeBookmark } =
  bookmarkSlice.actions;
