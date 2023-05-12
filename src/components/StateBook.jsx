import React from 'react';
import './Zbook.css';
import PropTypes from 'prop-types';

function Zbook({ ll }) {
  return (
    <div className="Divbook" id="Z">
      <div className="sectionA">
        <div className="action">
          Action
        </div>
        <div className="Title">
          {ll}
        </div>
        <div className="Typebook">
          Typebook
        </div>
        <div className="DivBtns">
          <button className="Comments" type="button">Comments</button>

          <button className="Remove" type="button">Remove</button>

          <button className="Edit" type="button">Edit</button>
        </div>

      </div>
      <div className="sectionB">
        <div>
          diagrame
        </div>
        <div>
          <div className="-Percent-Complete">64%</div>
          <div>complete</div>
        </div>
      </div>

      <div className="sectionC">
        <div className="Current-Chapter">chapitre</div>
        <div>chapitre nombre </div>
        <button type="button" className="Update-progress">update</button>
      </div>
    </div>
  );
}

Zbook.propTypes = {
  ll: PropTypes.string.isRequired,
};

export default Zbook;
