import React from "react";

export const fetchBooks = async (searchBook, filter, apiKey, sorting, startIndex, maxSearchBooks) => {
  const _url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}${filter}&orderBy=${sorting}&key=${apiKey}&startIndex=${startIndex}&maxResults=${maxSearchBooks}`;
  const response = await fetch(_url);
  return response.json();
};
