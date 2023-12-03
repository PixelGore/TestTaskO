import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {addToFavorites, removeFromFavorites} from "../../../Redux/Reducers/favoritesReducer";

import {BookType} from "../../../types/types";

type BookCardType = {
    book: BookType,
    isFavorite: boolean
}
export const BookCard: FC<BookCardType> = ({book, isFavorite = false}) => {
    const MAX_CHARACTER_SIZE = 150;
    const dispatch = useDispatch()

    const handleAddtoFavorites = () => {
        // @ts-ignore
        dispatch(addToFavorites(book))
    }
    const handleRemoveFromFavorites = () => {
        // @ts-ignore
        dispatch(removeFromFavorites(book))
    }
    return (
        <div
            className="m-4 flex justify-between w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md lg:m-10">
            <Link to={`/book/${book.id}`} className="mx-3 mt-3 h-60 overflow-hidden rounded-xl">
                <img className="object-contain w-full" src={book.volumeInfo.imageLinks?.thumbnail} alt="product image"/>
            </Link>
            <div className="mt-4 px-5 pb-5">
                <Link to={`/book/${book.id}`} className='flex items-center'>
                    <h5 className="text-xl tracking-tight text-slate-900">{book.volumeInfo.title}</h5>
                    <div className="flex items-center">
                        {!!book.volumeInfo.averageRating && <span
                            className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{book.volumeInfo.averageRating}</span>}
                    </div>
                </Link>
                <div>
                    {/* If text size exceeds limit trim text with "..." */}
                    {book.searchInfo?.textSnippet.length > MAX_CHARACTER_SIZE ?
                        `${book.searchInfo?.textSnippet.substring(0, MAX_CHARACTER_SIZE)}...` : book.searchInfo?.textSnippet}
                </div>
            </div>
            <div onClick={() => isFavorite ? handleRemoveFromFavorites() : handleAddtoFavorites()}
                 className="mt-4 mb-5 group flex self-baseline items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm cursor-pointer font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                <svg role="img" xmlns="http://www.w3.org/2000/svg"
                     className={`mr-2 h-6 w-6 ${isFavorite ? "fill-red-400" : "fill-white"} group-hover:fill-red-400`}
                     viewBox="0 0 24 24"
                     aria-labelledby="favouriteIconTitle"><title id="favouriteIconTitle">Favourite</title>
                    <path
                        d="M12,21 L10.55,19.7051771 C5.4,15.1242507 2,12.1029973 2,8.39509537 C2,5.37384196 4.42,3 7.5,3 C9.24,3 10.91,3.79455041 12,5.05013624 C13.09,3.79455041 14.76,3 16.5,3 C19.58,3 22,5.37384196 22,8.39509537 C22,12.1029973 18.6,15.1242507 13.45,19.7149864 L12,21 Z"/>
                </svg>
                {isFavorite ? "Remove from favorites" : "Add to favorites"}
            </div>
        </div>
    )
}