import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import { setLocalName, setLocalLocation } from '../utils';

const StyledSettings = styled.section`
  animation: fadein 1s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const Settings = () => {
  return (
    <StyledSettings>
      <Button onClick={() => setLocalName()} text="reset name"/>
      <Button onClick={() => setLocalLocation()} text="reset location" />
    </StyledSettings>
  )
}

export default Settings;
