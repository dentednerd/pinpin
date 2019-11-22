import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  background-color: #828dac;
  color: white;
  height: 4rem;
  width: calc(100% - 2rem);
  border: none;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items:center;
  font-size: 1rem;
  font-family: 'Lato', sans-serif;

  &::placeholder {
    color: white;
  }
`;

export default (props) => (
  <StyledInput {...props} />
);