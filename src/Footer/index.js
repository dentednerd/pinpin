import React from 'react';
import styled from '@emotion/styled';

const Footer = (props) => {
  const { hour, toggleShowSettings } = props;

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

    button {
      margin-right: 2vw;
    }
    
    span {
      font-family: 'Pangolin', cursive;
      font-size: 1.5rem;
      cursor: pointer;
      color: ${(hour < 9 || hour >= 21) ? '#ffffff' : '#828dac'};
      transition: text-shadow 0.25s ease-in-out;

      &:hover {
        text-shadow: 2px 2px 6px #ffffff, -2px -2px 6px #ffffff, 2px -2px 6px #ffffff, -2px 2px 6px #ffffff;
        transition: text-shadow 0.25s ease-in-out;
      }
    }
  `;

  return (
    <StyledFooter>
      <span
        onClick={() => toggleShowSettings(true)}
      >
        pinpin
      </span>
    </StyledFooter>
  );
}

export default Footer;
