import React from 'react';
import PropTypes from 'prop-types';
import './Zbook.css';

function Book({
  TITLE, AUTHOR, ID, Removebook, l,
}) {
  return (
    <div className="Divbook" id="Z">
      <div className="sectionA">
        <div className="action">
          {l}
        </div>
        <div className="tr">
          {TITLE}
        </div>
        <div className="Typebook">
          {AUTHOR}
        </div>
        <div className="DivBtns">
          <button className="Comments commun-btn" type="button">Comments</button>

          <div className="Line-1" />
          <button className={ID} onClick={Removebook} type="button" id="Remove">Remove</button>

          <div className="Line-1" />
          <button className="Edit commun-btn" type="button">Edit</button>
        </div>

      </div>
      <div className="sectionB">
        <div className="Oval-2 " />
        <div>
          <div className="-Percent-Complete">64%</div>
          <div>complete</div>
        </div>
      </div>
      <div className="Line-2" />
      <div className="sectionC">
        <div className="Current-Chapter">CURRENT CHAPTER</div>
        <div>
          Chapter
          {' '}
        </div>
        <button type="button" className="Update-progress">Update progress</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  l: PropTypes.string.isRequired,
  TITLE: PropTypes.string.isRequired,
  AUTHOR: PropTypes.string.isRequired,
  Removebook: PropTypes.func.isRequired,
  ID: PropTypes.string.isRequired,
};

export default Book;
