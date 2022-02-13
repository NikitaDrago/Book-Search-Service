import React from "react";

export const fetchBooks = async (searchBook, filter, apiKey, sorting, startIndex, maxSearchBooks) => {
  const _url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}${filter}&orderBy=${sorting}&key=${apiKey}&startIndex=${startIndex}&maxResults=${maxSearchBooks}`;
  const response = await fetch(_url);
  return response.json();
};

export const fetchInfoAboutBook = async (bookID, apiKey) => {
  const _url = `https://www.googleapis.com/books/v1/volumes/${bookID}?key=${apiKey}`;
  const response = await fetch(_url);
  return response.json();
};

