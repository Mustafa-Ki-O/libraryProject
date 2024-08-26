import { combineReducers } from "redux";
import Books from "./book";

const root=combineReducers({
    books:Books
})
export default root;