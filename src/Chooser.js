import React from 'react';

const Chooser = props => {
  return (
    <button className="chooser" onClick={props.handleClick.bind(this, props.appName)}>{props.appName}</button>
  )
};

export default Chooser;