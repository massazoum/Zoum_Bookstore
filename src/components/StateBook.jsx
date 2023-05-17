import React from 'react';
import PropTypes from 'prop-types';
import './Zbook.css';

function Book({
  TITLE, l, AUTHOR, llll, lllll, Removebook, ID,
}) {
  return (
    <div className="Divbook" id="Z">
      <div className="sectionA">
        <div className="action">
          {l}
        </div>
        <div className="Title">
          {TITLE}
        </div>
        <div className="Typebook">
          {AUTHOR}
        </div>
        <div className="DivBtns">
          <button className="Comments" type="button">Comments</button>

          <button className={ID} onClick={Removebook} type="button" id="Remove">Remove</button>

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

Book.propTypes = {
  l: PropTypes.string.isRequired,
  TITLE: PropTypes.string.isRequired,
  AUTHOR: PropTypes.string.isRequired,
  llll: PropTypes.string.isRequired,
  lllll: PropTypes.string.isRequired,
  Removebook: PropTypes.func.isRequired,
  ID: PropTypes.string.isRequired,
};

export default Book;
