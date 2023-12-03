import {FC} from "react";
import {useSelector} from "react-redux";

import {getFavorites} from "../../Redux/Selectors/bookSelector";
import PreLoader from "../common/Preloader/Preloader";
import {BookCard} from "../common/BookCard/BookCard";

import {BookType} from "../../types/types";


type MainType = {
    isFetching: boolean,
    menu: BookType[]
}
export const Main: FC<MainType> = ({isFetching, menu}) => {
    const favorites = useSelector(getFavorites)

    return (
        <>
            <h1 className="mx-10 mt-5 text-5xl font-medium leading-tight text-primary">
                Books Catalogue:
            </h1>
            {isFetching ? <PreLoader/> :
                <div className="grid justify-items-center grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
                    {menu.map((book) => {
                            const isFavorite = favorites.find(x => x.id === book.id)
                            return (
                                <BookCard book={book} key={book.id} isFavorite={!!isFavorite}/>
                            )
                        }
                    )}
                </div>
            }
        </>
    )
}