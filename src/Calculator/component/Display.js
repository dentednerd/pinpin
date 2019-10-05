import React from "react";
import styled from '@emotion/styled';

const StyledDisplay = styled.div`
  background: #828dac;
  color: white;
  height: 4rem;
  width: calc(100% - 2rem);
  font-size: 1.25rem;
  border: none;
  border-radius: 0.25rem;
  margin: 0.5rem auto;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items:center;
  text-align: right;
`;

export default (props) => (
  <StyledDisplay>
    {props.value}
  </StyledDisplay>
);
