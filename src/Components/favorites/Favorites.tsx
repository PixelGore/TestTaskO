import React from 'react';
import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getFavorites} from "../../Redux/Selectors/bookSelector";

import {BookCard} from "../common/BookCard/BookCard";

export const Favorites = () => {
    const favorites = useSelector(getFavorites)
    return (
        <>
            <div className="flex items-center justify-center mt-4">
                <h1 className="text-2xl font-semibold text-gray-900">Favorites</h1>
            </div>

            {!!favorites.length ? (
                <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {favorites.map((book) => (
                        <div key={book.id}>
                            <BookCard book={book} isFavorite/>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="flex items-center mt-6 text-center h-96">
                    <div className="flex flex-col w-full max-w-sm px-4 mx-auto">
                        <div className="p-3 mx-auto text-blue-500 rounded-full bg-gray-800">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                 strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                            </svg>
                        </div>
                        <h1 className="mt-3 text-lg">No favorites found</h1>
                        <p className="mt-2 text-gray-400">
                            We found no favorites on your account. Please add new favorites.
                        </p>
                        <div className="flex items-center mt-4 sm:mx-auto gap-x-3">
                            <Link to="/"
                                  className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-500 bg-blue-600">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
                                </svg>
                                <span>Add favorites</span>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
