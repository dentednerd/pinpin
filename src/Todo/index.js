import React, { useState } from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import List from './List';

const Todo = () => {
  const starterCards = [
    {
      id: v4(),
      text: 'Click "pinpin" in the bottom right corner to change settings'
    },
    {
      id: v4(),
      text: 'Click a thought to remove it'
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

  const StyledToDo = styled.section`
    position: relative;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: flex-start;
    margin: 0;
    width: 40vw;
    min-width: 40vw;

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
    padding: 0 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:center;
  `;

  return (
    <StyledToDo>
      <TitleCard>keep your thoughts here</TitleCard>
      <List 
        cards={cards}
        deleteCard={deleteCard}
        addCard={addCard}
      />
    </StyledToDo>
  );
}

export default Todo;
