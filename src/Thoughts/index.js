import React, { useState } from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import List from './List';

const Thoughts = () => {
  const starterCards = [
    {
      id: v4(),
      text: 'Pin your thoughts here to save them for later'
    },
    {
      id: v4(),
      text: 'Click "pinpin" in the bottom right corner to change settings'
    },
    {
      id: v4(),
      text: 'Click a thought to unpin it'
    },
  ]

  const initCards = () => {
    const storedCards = JSON.parse(localStorage.getItem('pinpinTodo'));
    if (!storedCards || storedCards.length < 1) {
      return starterCards;
    }
    return storedCards;
  }

  const [cards, updateCards] = useState(initCards());

  const addCard = (newCard) => {
    const newCardFormatted = {
      id: v4(),
      text: newCard
    };
    updateCards([...cards, newCardFormatted]);
    localStorage.setItem('pinpinTodo', JSON.stringify([...cards, newCardFormatted]));
  }

  const deleteCard = (cardId) => {
    let cardIndex;

    for (let i = 0; i < cards.length; i++) {
      if (cards[i].id === cardId) {
        cardIndex = i;
      }
    }

    const newCards = cards;
    newCards.splice(cardIndex, 1);
    updateCards([...newCards]);
    localStorage.setItem('pinpinTodo', JSON.stringify([...newCards]));
  }

  const StyledThoughts = styled.section`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    width: calc(100% - 2rem);
    animation: fadein 1s;

    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    a {
      text-decoration: none;
    }

    .edit-card-button {
      background: transparent;
      border: solid 3px white;
      border-radius: 4px;
      color: white;
    }
  `;

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
    align-items:center;
  `;

  return (
    <StyledThoughts>
      <TitleCard>pin your thoughts here</TitleCard>
      <List
        cards={cards}
        deleteCard={deleteCard}
        addCard={addCard}
      />
    </StyledThoughts>
  );
}

export default Thoughts;
