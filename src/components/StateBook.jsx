import React from 'react';
import './Zbook.css';
import PropTypes from 'prop-types';

function Zbook({
  ll, l, lll, llll, lllll,
}) {
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

          <button className="Remove" type="button">Remove</button>

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
};

export default Zbook;
