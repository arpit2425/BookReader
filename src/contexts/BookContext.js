import React, { useState, createContext } from "react";
export const BookContext = createContext();
function BookContextProvider(props) {
  const [books, setBooks] = useState([
    { title: "Revolution 2020", id: 1 },
    { title: "James Bond", id: 2 },
    { title: "Advenuture Land", id: 3 },
    { title: "DarkSide", id: 4 },
  ]);
  return (
    <BookContext.Provider value={{ books }}>
      {props.children}
    </BookContext.Provider>
  );
}

export default BookContextProvider;
