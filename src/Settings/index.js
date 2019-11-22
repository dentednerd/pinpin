import React from 'react';
import Button from '../atoms/Button';

const Settings = () =>{
  const resetName = () => {
    localStorage.removeItem('pinpinName');
    localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
  }

  const resetLocation = () => {
    localStorage.removeItem('pinpinLocation');
    localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
  }

  return (
    <div>
      <Button onClick={() => resetName()} text="reset name"/>
      <Button onClick={() => resetLocation()} text="reset location" />
    </div>
  )
}

export default Settings;
