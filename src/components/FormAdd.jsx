import React from 'react';
import './FormAdd.css';

function Form() {
  return (
    <div className="DivForm">
      <div>ADD NEW BOOK</div>
      <div>
        <form action="">
          <label htmlFor="bookTitle">
            <input type="text" id="bookTitle" className="inpText" name="bookTitle" placeholder="Book title" />
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
          <button className="BtnSumit" type="submit">Add Book</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
