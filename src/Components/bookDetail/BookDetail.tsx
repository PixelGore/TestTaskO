import React, { useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";

import {requestBook} from "../../Redux/Reducers/booksReducer";
import {getIsFetching, getBook, getFavorites} from "../../Redux/Selectors/bookSelector";
import {addToFavorites, removeFromFavorites} from "../../Redux/Reducers/favoritesReducer";

import PreLoader from "../common/Preloader/Preloader";

import {BookType} from "../../types/types";

export const BookDetail = () => {
    const dispatch = useDispatch()

    const favorites = useSelector(getFavorites)
    const book: BookType = useSelector(getBook)
    const isFetching: boolean = useSelector(getIsFetching)
    let {id} = useParams();

    const isFavorite = favorites.find(x => x.id === book.id)

    useEffect(() => {
        // @ts-ignore
        dispatch(requestBook(id))
    }, [dispatch])

    const handleAddtoFavorites = () => {
        // @ts-ignore
        dispatch(addToFavorites(book))
    }

    const handleRemoveFromFavorites = () => {
        // @ts-ignore
        dispatch(removeFromFavorites(book))
    }

    return (
        <>
            {isFetching ? <PreLoader/> :
                (<section className="py-10 font-poppins dark:bg-gray-800">
                    <div className="max-w-6xl px-4 mx-auto">
                        <div className="flex flex-wrap mb-24 -mx-4">
                            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
                                <div className="sticky top-0 overflow-hidden ">
                                    <div className="relative mb-6 lg:mb-10 lg:h-96">
                                        <img className="object-contain w-full lg:h-full"
                                             src={book.volumeInfo?.imageLinks?.thumbnail}
                                             alt="product image"/>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2">
                                <div className="lg:pl-20">
                                    <div className="mb-6 ">
                                        <h2 className="flex items-center max-w-xl mt-6 mb-6 text-xl font-semibold leading-loose tracking-wide text-gray-700 md:text-2xl dark:text-gray-300">
                                            {book.volumeInfo?.title}
                                            {!!book.volumeInfo?.averageRating && <span
                                                className="mr-2 ml-3 rounded text-white bg-gray-700 px-2.5 py-0.5 text-xs font-semibold">{book.volumeInfo.averageRating}</span>}
                                        </h2>
                                        <p className="text-gray-300 mb-4">{book.volumeInfo?.subtitle}</p>
                                        <p className="text-gray-300">{book.volumeInfo?.description}</p>
                                    </div>
                                    <div className="mb-6">
                                        <h2 className="mb-2 text-lg font-bold text-gray-700 dark:text-gray-400">About:</h2>
                                        <div className="bg-gray-100 dark:bg-gray-700 rounded-xl">
                                            <div className="p-3 lg:p-5 ">
                                                <div className="p-2 rounded-xl lg:p-6 dark:bg-gray-800 bg-gray-50">
                                                    <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
                                                        <div className="w-full mb-4 md:w-2/5">
                                                            <div className="flex ">
                                                                <div>
                                                                    <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                        No. of pages
                                                                    </p>
                                                                    <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                        {book.volumeInfo?.pageCount}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full mb-4 md:w-2/5">
                                                            <div className="flex ">
                                                                <div>
                                                                    <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                        Language
                                                                    </p>
                                                                    <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                        {book.volumeInfo?.language}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                            <div className="flex ">
                                                                <div>
                                                                    <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                        Published date
                                                                    </p>
                                                                    <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                        {book.volumeInfo?.publishedDate}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="w-full mb-4 lg:mb-0 md:w-2/5">
                                                            <div className="flex ">
                                                                <div>
                                                                    <p className="mb-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                                                                        Publisher
                                                                    </p>
                                                                    <h2 className="text-base font-semibold text-gray-700 dark:text-gray-400">
                                                                        {book.volumeInfo?.publisher}
                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-6 mb-6 border-t border-b border-gray-200 dark:border-gray-700">
                                        <span className="text-base text-gray-600 dark:text-gray-400">{book.saleInfo?.saleability}</span>
                                    </div>
                                    <div className="flex gap-4 mb-6">
                                        <button onClick={() => isFavorite ? handleRemoveFromFavorites() : handleAddtoFavorites()}
                                           className="w-full px-4 py-3 text-center text-gray-100 bg-blue-600 border border-transparent dark:border-gray-700 hover:border-blue-500 hover:text-blue-700 hover:bg-blue-100 dark:text-gray-400 dark:bg-gray-700 dark:hover:bg-gray-900 rounded-xl">
                                            {isFavorite ? "Remove from favorites" : "Add to favorites"}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>)
            }
        </>
    )
}