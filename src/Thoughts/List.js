import React from 'react';
import styled from '@emotion/styled';
import AddACard from './AddACard';
import Card from './Card';

const StyledList = styled.div`
  background: rgba(255,255,255,0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: calc(100% - 2rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  overflow: hidden;
`;

const List = (props) => {
  const { cards, addCard, deleteCard } = props;

  return (
    <StyledList>
      {cards.map((card) => (
        <Card
          deleteCard={() => deleteCard(card.id)}
          key={card.id}
          card={card}
        />
      ))}
      <AddACard addCard={addCard} />
    </StyledList>
  );
}

export default List;
