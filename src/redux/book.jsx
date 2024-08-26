import { ADD_BOOK, REMOVE_BOOK,UPDATE_BOOK } from "./actionType";
const initialState={
    books:[]
};
function Books(state=initialState,action){
    switch(action.type){
        case ADD_BOOK:
            return {...state , books : [ ...state.books , action.payload ]};
        case REMOVE_BOOK:
            return {...state , books : state.books.filter( (book) => book.id !== action.payload )}; 
        case UPDATE_BOOK:
            return {
                ...state,
                books: state.books.map((book) => {
                  if (book.id === action.payload.id) {
                    return { ...book, ...action.payload };
                  }
                  return book;
                }),
              };
        default:
            return state;
    }
}
export default Books;