import React from 'react';
import styled from '@emotion/styled';
import Greeter from '../Greeter';
import Todo from '../Todo';

const StyledGrid = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  width: 90vw;
  max-width: 90vw;
`;

const Left = styled.section`
  height: 80vh;
  width: 50vw;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-start;
  padding-right: 5vw;
`;

const Right = styled.section`
  width: 40vw;
  min-width: 40vw;
  justify-content: flex-start;
`;

const Grid = (props) => {
  return (
    <StyledGrid>
      <Left>
        <Greeter />
      </Left>
      <Right>
        <Todo />
      </Right>
    </StyledGrid>
  );
}

export default Grid;
