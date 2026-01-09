import React from 'react';
import '../css/buttonGray.css';

function ButtonGray(props) {
  return (
    <div>
      <button className="buttonGray" onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
}

export default ButtonGray;