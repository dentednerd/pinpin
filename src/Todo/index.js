import React from 'react';
import { v4 } from 'uuid';
import styled from '@emotion/styled';
import List from './List';

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          id: v4(),
          text: 'DFTBA'
        }
      ]
    };

    this.addCard = this.addCard.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.findIndex = this.findIndex.bind(this);
  }

  findIndex(lists, id) {
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].id === id) {
          return i;
      }
    }
  }

  addCard(newCard) {
    const newCardFormatted = {
      id: v4(),
      text: newCard
    };
    this.setState({
      lists: this.state.cards.push(newCardFormatted)
    });
  }

  deleteCard(cardId) {
    const cardIndex = this.findIndex(this.state.cards, cardId);
    const newState = [...this.state.cards];
    newState.splice(cardIndex, 1);
    this.setState({
      cards: newState
    });
  }

  render() {
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
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          addCard={this.addCard}
        />
      </StyledToDo>
    );
  }
}



export default Todo;
