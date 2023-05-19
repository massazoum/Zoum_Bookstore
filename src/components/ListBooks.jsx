import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Book from './StateBook';
import './ListBooks.css';
import Form from './FormAdd';
import { getListBook, deletebook } from '../redux/books/BookSlice';

function ListBook() {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();
  console.log(books);

  const handleremove = (event) => {
    const clickedButton = event.target.className;
    dispatch(deletebook(clickedButton))
      .then(() => dispatch(getListBook()));
  };
  console.log(books);

  useEffect(() => {
    dispatch(deletebook());
    dispatch(getListBook());
  }, []);

  const lineStyle = {
    width: '75vw',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
    backgroundColor: 'rgba(216, 216, 216, 0.433)',
  };
  const renderData = Object.keys(books).map((key) => {
    const item = books[key][0];
    console.log(key);
    console.log(Object.keys(books)[key]);
    return (
      <Book
        key={key}
        AUTHOR={item.author}
        TITLE={item.title}
        l={item.category}
        Removebook={handleremove}
        ID={key}

      />
    );
  });

  return (
    <>
      <div>
        {renderData}
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
