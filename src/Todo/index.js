import React, { useState } from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import List from './List';

const Todo = () => {
  const starterCards = [
    {
      id: v4(),
      text: 'Click "pinpin" to change settings'
    },
    {
      id: v4(),
      text: 'Then click me!'
    },
  ]

  const initCards = () => {
    const storedCards = JSON.parse(localStorage.getItem('pinpinTodo'));
    if (storedCards.length < 1) {
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

  const StyledToDo = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    width: 100%;

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

  return (
    <StyledToDo>
      <List 
        cards={cards}
        deleteCard={deleteCard}
        addCard={addCard}
      />
    </StyledToDo>
  );
}

export default Todo;
