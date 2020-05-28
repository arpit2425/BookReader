import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// export class BookList extends Component {
//   render () {
//     return (
//       <ThemeContext.Consumer>
//         {context => {
//           const { isLight, light, dark } = context
//           const theme = isLight ? light : dark
//           return (
//             <div
//               className='book-list'
//               style={{ color: theme.syntax, background: theme.bg }}
//             >
//               <ul>
//                 <li style={{ background: theme.ui }}>the way of kings</li>
//                 <li style={{ background: theme.ui }}>the name of the wind</li>
//                 <li style={{ background: theme.ui }}>the final empire</li>
//               </ul>
//             </div>
//           )
//         }}
//       </ThemeContext.Consumer>
//     )
//   }
// }

function BookList() {
  const { isLight, light, dark } = useContext(ThemeContext);
  const { books } = useContext(BookContext);
  const theme = isLight ? light : dark;
  return (
    <div
      className="book-list"
      style={{ color: theme.syntax, background: theme.bg }}
    >
      <ul>
        {books.map((book) => {
          return (
            <li key={book.id} style={{ background: theme.ui }}>
              {book.title}
            </li>
          );
        })}
        s{" "}
      </ul>
    </div>
  );
}

export default BookList;
