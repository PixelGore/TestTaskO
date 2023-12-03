import { instance } from './api';
import {API_KEY, DEFAULT_SEARCH_QUERY, MAX_BOOKS_RESULTS} from "../constants";
import {BookType} from "../types/types";

export const booksAPI = {
    async getBooks(query?: string) {
        // Using default search query since API doesn't provide a base response with items for empty query
        try {
            const res = await instance.get(`v1/volumes?q=${query || DEFAULT_SEARCH_QUERY}&key=${API_KEY}&maxResults=${MAX_BOOKS_RESULTS}`);
            return res.data.items as BookType[];
        } catch (err) {
            return console.warn(err);
        }
    },
     async getBook(id:number) {
        try {
            const res = await instance.get(`v1/volumes/${id}?key=${API_KEY}`);
            return res.data as BookType;
        } catch (err) {
            return console.warn(err);
        }
    }
}