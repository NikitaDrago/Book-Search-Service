export const fetchBooks = async (searchBook, apiKey, maxSearchBooks) => {
  const _url = `https://www.googleapis.com/books/v1/volumes?q=${searchBook}&key=${apiKey}&startIndex=0&maxResults=${maxSearchBooks}`;
  const response = await fetch(_url);
  return response.json();
};