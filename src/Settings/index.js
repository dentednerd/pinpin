import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

const StyledSettings = styled.div`

`;

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
    <StyledSettings>
      <Button onClick={() => resetName()} text="reset name"/>
      <Button onClick={() => resetLocation()} text="reset location" />
    </StyledSettings>
  )
}

export default Settings;
