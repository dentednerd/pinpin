import React from 'react';
import Button from '../Button';

export default ({ handleClick, appName }) => {
  return (
    <Button onClick={handleClick.bind(this, appName)} text={appName} />
  )
};
