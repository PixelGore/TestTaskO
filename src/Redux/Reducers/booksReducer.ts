import { Dispatch } from 'redux';

import { InferActionTypes, BaseThunkType } from '../reduxStore';
import { booksAPI } from '../../api/booksApi';
import {BookType} from "../../types/types";


// ActionCreators
export const actions = {
    setBooksAC: (books: BookType[]) => ({ type: 'booksPage/SET_BOOKS', books } as const),
    setBookAC: (book: BookType) => ({ type: 'bookDetailPage/SET_BOOK', book } as const),
    toggleIsFetchingAC: (isFetching: boolean) => ({ type: 'booksPage/TOGGLE_IS_FETCHING', isFetching } as const),
}
type ActonTypes = InferActionTypes<typeof actions>

let initialState = {
    books: [] as BookType[],
    book: {} as BookType,
    isFetching: false,
}
type InitialStateType = typeof initialState


// Reducer
const menuReducer = (state = initialState, action: ActonTypes): InitialStateType => {
    switch (action.type) {
        case "booksPage/SET_BOOKS":
            return {
                ...state,
                books: action.books
            }
        case "bookDetailPage/SET_BOOK":
            return {
                ...state,
                book: action.book
            }
        case "booksPage/TOGGLE_IS_FETCHING":
            return { ...state, isFetching: action.isFetching }

        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActonTypes>
type ThunkType = BaseThunkType<ActonTypes>

export const requestBooks = (query?:string): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.toggleIsFetchingAC(true))
        let data = await booksAPI.getBooks(query)
        dispatch(actions.setBooksAC(data as BookType[]))
        dispatch(actions.toggleIsFetchingAC(false))
    }
}

export const requestBook = (id:number):ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.toggleIsFetchingAC(true))
        let data = await booksAPI.getBook(id)
        dispatch(actions.setBookAC(data as BookType))
        dispatch(actions.toggleIsFetchingAC(false))
    }
}


export default menuReducer;