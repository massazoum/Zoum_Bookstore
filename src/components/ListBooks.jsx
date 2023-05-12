import React, { useState, useEffect } from 'react';
import Zbook from './StateBook';
import './ListBooks.css';

function ListBook() {
  const [Books, setBooks] = useState([
    {
      Name: 'The Hunger Games',
    },
    {
      Name: 'Dune',
    },
    {
      Name: 'Capital in the Twenty-First Century',
    },
  ]);

  useEffect(() => {
    const fg = {
      Name: 'Honda',
    };
    setBooks((prevBooks) => [...prevBooks, fg]);
  }, []);

  useEffect(() => {
    const updatedBooks = Books.filter((book) => book.Name !== 'Honda');
    setBooks(updatedBooks);
  }, []);

  const lineStyle = {
    width: '75rem',
    height: '0.125rem',
    margin: '2.5rem 0.063rem 1.813rem 0',
    border: 'solid 1px #e8e8e8',
  };

  const buttons = document.querySelectorAll('.Remove');
  const ArrButtons = Array.from(buttons);
  ArrButtons.forEach((element) => {
    element.addEventListener('click', () => {
      const el = element.parentElement.parentElement.parentElement;
      el.style.display = 'none';
      // Perform further actions based on the button index
    });
  });

  return (
    <>
      <div>
        {Books.map((element) => (<Zbook key={element} ll={element.Name} />))}
      </div>
      <div className="Line" style={lineStyle}> </div>
    </>
  );
}

export default ListBook;
