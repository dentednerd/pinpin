import React from 'react';
import { v4 } from 'uuid';

import List from './List';

class Trello extends React.Component {
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
    const cardIndex = findIndex(this.state.cards, cardId);
    const newState = [...this.state.cards];
    newState.splice(cardIndex, 1);
    this.setState({
      cards: newState
    });
  }

  render() {
    return (
      <div className="to-do-list">
        <List 
          cards={this.state.cards}
          deleteCard={this.deleteCard}
          addCard={this.addCard}
        />
      </div>
    );
  }
}

function findIndex(lists, id) {
  for (let i = 0; i < lists.length; i++) {
    if (lists[i].id === id) {
        return i;
    }
  }
}

export default Trello;
