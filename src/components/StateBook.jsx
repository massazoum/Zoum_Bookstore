import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
// import { removeBook } from '../redux/BookSlice';
import './Zbook.css';

function Zbook({
  ll, l, lll, llll, lllll, Removebook,
}) {
  // const books = useSelector((state) => state.books.books);
  // const dispatch = useDispatch();

  // const Remove = () => {
  //   dispatch(removeBook({
  //     Name: 'Dune',
  //   }));
  //   console.log(books);
  // };

  return (
    <div className="Divbook" id="Z">
      <div className="sectionA">
        <div className="action">
          {l}
        </div>
        <div className="Title">
          {ll}
        </div>
        <div className="Typebook">
          {lll}
        </div>
        <div className="DivBtns">
          <button className="Comments" type="button">Comments</button>

          <button className="Remove" onClick={Removebook} type="button">Remove</button>

          <button className="Edit" type="button">Edit</button>
        </div>

      </div>
      <div className="sectionB">
        <div className="Oval-2 " />
        <div>
          <div className="-Percent-Complete">{lllll}</div>
          <div>complete</div>
        </div>
      </div>

      <div className="sectionC">
        <div className="Current-Chapter">CURRENT CHAPTER</div>
        <div>
          {llll}
          {' '}
        </div>
        <button type="button" className="Update-progress">update</button>
      </div>
    </div>
  );
}

Zbook.propTypes = {
  l: PropTypes.string.isRequired,
  ll: PropTypes.string.isRequired,
  lll: PropTypes.string.isRequired,
  llll: PropTypes.string.isRequired,
  lllll: PropTypes.string.isRequired,
  Removebook: PropTypes.func.isRequired,
};

export default Zbook;
