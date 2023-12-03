import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {requestBooks} from "./Redux/Reducers/booksReducer";
import {getIsFetching, getMenu} from "./Redux/Selectors/bookSelector";

import {Main} from './Components/main/Main'
import {Header} from "./Components/header/Header";
import {Footer} from "./Components/footer/Footer";
import {BookDetail} from "./Components/bookDetail/BookDetail";
import {Favorites} from "./Components/favorites/Favorites";
import {PageNotFound} from "./Components/common/PageNotFound/PageNotFound";

import {BookType} from "./types/types";


function App() {
    const menu: BookType[] = useSelector(getMenu)
    const isFetching: boolean = useSelector(getIsFetching)

    const dispatch = useDispatch()

    const searchBooks = (query: string) => {
        // @ts-ignore
        dispatch(requestBooks(query))
    }

    useEffect(() => {
        // @ts-ignore
        searchBooks()
    }, [dispatch])

    return (
        <BrowserRouter>
            <Header searchBooks={searchBooks}/>
            <div className="min-h-[65vh]">
                <Routes>
                    <Route path="/" element={<Main menu={menu} isFetching={isFetching}/>}/>
                    <Route path="book">
                        <Route path=':id' element={<BookDetail/>}/>
                    </Route>
                    <Route path="favorites" element={<Favorites/>}/>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </div>
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
