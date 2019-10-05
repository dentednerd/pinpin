import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';

export default class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.resetName = this.resetName.bind(this);
    this.resetLocation = this.resetLocation.bind(this);
  }

  resetName = () => {
    localStorage.removeItem('pinpinName');
    localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
  }

  resetLocation = () => {
    localStorage.removeItem('pinpinLocation');
    localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
  }

  render() {
    const StyledSettings = styled.div`
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items: center;
      height: 40vh;
    `;
    return (
      <StyledSettings>
        <Button onClick={this.resetName} text="reset name"/>
        <Button onClick={this.resetLocation} text="reset location" />
      </StyledSettings>
    )
  }

} 
