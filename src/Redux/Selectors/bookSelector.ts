import { AppStateType } from '../reduxStore';

export const getMenu = (state: AppStateType) => {
    return state.bookPage.books
}

export const getBook = (state:AppStateType) => {
    return state.bookPage.book
}

export const getIsFetching = (state: AppStateType) => {
    return state.bookPage.isFetching;
}

export const getFavorites = (state:AppStateType) => {
    return state.favoritesPage.favoriteItems;
}