import { v4 as uuid } from 'uuid';
import React, { useState } from 'react';
import './FormAdd.css';
import { useDispatch } from 'react-redux';
import { postnewbook, getListBook } from '../redux/books/BookSlice';

function Form() {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategorie] = useState('Action');

  const handlechangTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleCategorie = (event) => {
    setCategorie(event.target.value);
  };

  const handleAddBook = () => {
    dispatch(postnewbook({
      title,
      author,
      item_id: uuid(),
      category,
    }))
      .then(() => dispatch(getListBook()));
  };

  return (
    <div className="DivForm">
      <div className="TitleBooK common-style">ADD NEW BOOK</div>
      <div>
        <form action="">
          <label htmlFor="bookTitle">
            <input type="text" id="bookTitle" className="inpText" name="bookTitle" placeholder="Book title" required onChange={handlechangTitle} />
          </label>
          <label htmlFor="bookTitle">
            <input type="text" id="bookTitle" className="inpText" name="bookTitle" placeholder="Author" required onChange={handleAuthor} />
          </label>

          <label htmlFor="dd">
            <select name="" id="dd" className="Select" onChange={handleCategorie}>
              <optgroup id="dd">
                <option id="dd" selected>Action</option>
                <option id="dd">Science Fiction</option>
                <option id="dd">Economy</option>
              </optgroup>
            </select>
          </label>
          <button className="BtnSumit common-style" onClick={handleAddBook} type="button">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
