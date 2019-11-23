import React from 'react';
import styled from '@emotion/styled';

const StyledInput = styled.input`
  background-color: #a4afce;
  color: white;
  height: 2rem;
  width: calc(100% - 2rem);
  border: none;
  border-radius: 0.25rem;
  margin: 0 0 0.5rem;
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
  <StyledInput autoFocus {...props} />
);
