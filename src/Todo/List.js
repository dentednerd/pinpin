import React from 'react';
import styled from '@emotion/styled';
import AddACard from './AddACard';
import Card from './Card';

const List = (props) => {
  const { cards, addCard, deleteCard } = props;
  const StyledList = styled.div`
    width: 100%
  `;

  return (
    <StyledList>
        {cards.map((card) => (
          <Card deleteCard={() => deleteCard(card.id)} key={card.id} card={card}/>
        ))}
      <AddACard addCard={addCard} />
    </StyledList>
  );
}

export default List;