import { useDispatch, useSelector } from 'react-redux';
import Book from './StateBook';
import './ListBooks.css';
import Form from './FormAdd';
import { removeBook } from '../redux/books/BookSlice';

function ListBook() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleremove = (event) => {
    const clickedButton = parseInt(event.target.className, 10);
    dispatch(removeBook(clickedButton));
  };

  const lineStyle = {
    width: '75vw',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
  };

  return (
    <>
      <div>
        {books.map((element) => (
          <Book
            key={element}
            l={element.category}
            TITLE={element.title}
            AUTHOR={element.author}
            llll={element.ChapterBook}
            lllll={element.Percent}
            ID={element.item_id}
            Removebook={handleremove}
          />
        ))}
      </div>
      <div className="Line" style={lineStyle}> </div>
    </>
  );
}

export default function BookComponent() {
  return (
    <div>
      <ListBook />
      <Form />
    </div>
  );
}
