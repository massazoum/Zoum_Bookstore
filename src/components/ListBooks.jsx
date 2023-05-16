import { useDispatch, useSelector } from 'react-redux';
import Zbook from './StateBook';
import './ListBooks.css';
import Form from './FormAdd';
import { removeBook } from '../redux/books/BookSlice';

function ListBook() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleremove = (event) => {
    const clickedButton = event.target;
    dispatch(removeBook(clickedButton.parentElement.parentElement.querySelector('.Title').textContent));
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
          <Zbook
            key={element}
            l={element.Type}
            ll={element.Name}
            lll={element.NameAuthor}
            llll={element.ChapterBook}
            lllll={element.Percent}
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
