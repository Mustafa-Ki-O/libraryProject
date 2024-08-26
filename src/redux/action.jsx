import { ADD_BOOK,REMOVE_BOOK,UPDATE_BOOK } from "./actionType";

export const addBook=(book) => ({
   type:ADD_BOOK,
   payload:book
});

export const removeBook = (id) => ({
     type: REMOVE_BOOK,
     payload: id
});

export const updateBook = (book) => ({
   type: UPDATE_BOOK,
   payload: book
});