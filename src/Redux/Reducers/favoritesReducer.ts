import { Dispatch } from 'react';
import { BookType } from '../../types/types';
import { BaseThunkType, InferActionTypes } from '../reduxStore';
//Action Creators
export const actions = {
    setFavoritesAC: (book: BookType) => ({ type: 'favorites/SET_FAVORITE_ITEM', payload: book } as const),
    RMFavoritesAC: (product: BookType) => ({ type: 'favorites/REMOVE_FAVORITE_ITEM', payload: product } as const),
}
type ActionTypes = InferActionTypes<typeof actions>


//InitialState
let initialState = {
    favoriteItems: [] as BookType[],
}
export type InitialStorageStateType = typeof initialState


//Reducer
const favoritesReducer = (state = initialState, action: ActionTypes): InitialStorageStateType => {
    switch (action.type) {
        case "favorites/SET_FAVORITE_ITEM":
            const item = action.payload;
            const existItem = state.favoriteItems.find(x => x.id === item.id)

            if (existItem) {
                return {
                    ...state,
                    favoriteItems: state.favoriteItems.map(stateItem =>
                        stateItem.id === existItem.id ? item : stateItem)
                }
            } else {
                return {
                    ...state,
                    favoriteItems: [...state.favoriteItems, item]
                }
            }
        case "favorites/REMOVE_FAVORITE_ITEM":
            return {
                ...state,
                favoriteItems: [...state.favoriteItems.filter(x => x.id !== action.payload.id)]
            }
        default:
            return state
    }
}

// Thunks
type DispatchType = Dispatch<ActionTypes>
type ThunkType = BaseThunkType<ActionTypes>

export const addToFavorites = (book: BookType): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.setFavoritesAC(book))
    }
}

export const removeFromFavorites = (book: BookType): ThunkType => {
    return async (dispatch: DispatchType) => {
        dispatch(actions.RMFavoritesAC(book))
    }
}

export default favoritesReducer;