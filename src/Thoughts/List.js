import React from 'react';
import styled from '@emotion/styled';
import AddACard from './AddACard';
import Card from './Card';

const TitleCard = styled.section`
  position: absolute;
  top: -1.5rem;
  right: 1rem;
  height: 2rem;
  border: none;
  border-radius: 0.25rem;
  background: #717c9b;
  color: #ffffff;
  font-family: 'Pangolin', cursive;
  height: 2rem;
  padding: 0 1rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const StyledList = styled.div`
  position: relative;
  background: rgba(255,255,255,0.05);
  padding: 1rem;
  border-radius: 0.5rem;
  max-width: calc(100% - 2rem);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const List = (props) => {
  const { cards, addCard, deleteCard } = props;

  return (
    <StyledList>
      <TitleCard>pin your thoughts here</TitleCard>
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
