import React, { useState, useEffect } from 'react';
import Zbook from './StateBook';
import './ListBooks.css';
import Form from './FormAdd';

function ListBook() {
  const [Books, setBooks] = useState([
    {
      Type: 'Action',
      Name: 'The Hunger Games',
      Percent: '64%',
      NameAuthor: 'Suzanne Collins',
      ChapterBook: 'Chapter 17',

    },
    {
      Type: 'Science-Fiction',
      Name: 'Dune',
      Percent: '8%',
      NameAuthor: 'Frank Herbert',
      ChapterBook: 'Chapter 3: "A Lesson Learned"',
    },
    {
      Type: 'Economy',
      Name: 'Capital in the Twenty-First Century',
      Percent: '0%',
      NameAuthor: 'Suzanne Collins',
      ChapterBook: 'Introduction',
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
    width: '75vw',
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
    });
  });

  return (
    <>
      <div>
        {Books.map((element) => (
          <Zbook
            key={element}
            l={element.Type}
            ll={element.Name}
            lll={element.NameAuthor}
            llll={element.ChapterBook}
            lllll={element.Percent}
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
