import React, { useState } from 'react';
import styled from '@emotion/styled';
import Settings from '../Settings';

const StyledFooter = styled.footer`
  background-color: transparent;
  width: 100vw;
  max-width: 100vw;
  padding: 1em 5vw;
  margin: 0;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 5vh;
  animation: fadein 3s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }

  button {
    margin-right: 2vw;
  }
  
  span {
    font-family: 'Pangolin', cursive;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const Footer = (props) => {
  const [settings, toggleSettings] = useState(false);
  const { hour } = props;

  return (
    <StyledFooter>
      {settings && <Settings />}
      <span
        style={{ color: (hour < 9 || hour >= 21) ? '#ffffff' : '#828dac' }}
        onClick={() => toggleSettings(!settings)}
      >
        pinpin
      </span>
    </StyledFooter>
  );
}

export default Footer;
