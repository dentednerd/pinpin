import React from 'react';
import AddACard from './AddACard';
import Card from './Card';

const List = (props) => {
  const { cards, addCard, deleteCard } = props;

  return (
    <div>
      {cards.map((card) => (
        <Card
          deleteCard={() => deleteCard(card.id)}
          key={card.id}
          card={card}
        />
      ))}
      <AddACard addCard={addCard} />
    </div>
  );
}

export default List;