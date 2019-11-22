import React from 'react';
import styled from '@emotion/styled';

const StyledButton = styled.button`
  background-color: white;
  color: #828dac;
  height: 2em;  
  width: 8em;
  font-size: 1rem;
  font-family: 'Pangolin', cursive;
  border: none;
  border-radius: 0.25rem;
`;

export default ({ onClick, text }) => {
  return (
    <StyledButton onClick={onClick}>{text}</StyledButton>
  );
};
