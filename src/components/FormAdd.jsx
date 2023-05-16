import React from 'react';
import './FormAdd.css';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/BookSlice';

let counter = 2;
function Form() {
  function generateId() {
    counter += 1;
    return counter;
  }

  const dispatch = useDispatch();

  const handleAddBook = () => {
    if (document.querySelector('.inpText').value !== '') {
      const selectElement = document.getElementById('dd');
      const selectedOption = selectElement.options[selectElement.selectedIndex];
      dispatch(addBook({
        Type: selectedOption.textContent,
        title: document.querySelector('.inpText').value,
        Percent: '8%',
        author: 'Richard Dawkins',
        item_id: generateId(),
      }));
    }
  };

  return (
    <div className="DivForm">
      <div>ADD NEW BOOK</div>
      <div>
        <form action="">
          <label htmlFor="bookTitle">
            <input type="text" id="bookTitle" className="inpText" name="bookTitle" placeholder="Book title" required />
          </label>
          <label htmlFor="dd">
            <select name="" id="dd" className="Select">
              <optgroup id="dd">
                <option id="dd" value="" selected>Action</option>
                <option id="dd" value="">Science Fiction</option>
                <option id="dd" value="">Economy</option>
              </optgroup>
            </select>
          </label>
          <button className="BtnSumit" onClick={handleAddBook} type="button">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
