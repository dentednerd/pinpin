import React from 'react';
import styled from '@emotion/styled';
import Greeter from '../Greeter';
import Thoughts from '../Thoughts';
import Settings from '../Settings';

const StyledGrid = styled.section`
  display: grid;
  grid-template-rows: repeat(2, 45vh);
  grid-template-columns: 100vw;
  width: 100vw;

  @media(min-width: 768px) {
    grid-template-rows: 90vh;
    grid-template-columns: repeat(2, 50%);
  }
`;

const Left = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: calc(100% - 2rem);
`;

const Right = styled.section`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: calc(100% - 2rem);
`;

const Grid = ({ showSettings, toggleShowSettings }) => {
  return (
    <StyledGrid>
      <Left>
        <Greeter />
      </Left>
      <Right>
        {showSettings ? <Settings toggleShowSettings={toggleShowSettings}/> : <Thoughts />}
      </Right>
    </StyledGrid>
  );
}

export default Grid;
