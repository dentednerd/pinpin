import React from 'react';
import { v4 } from 'uuid';

import List from './List';
import './Kanban.css';

// TODO: still refs to Bootstrap CSS in here, refactor

class Trello extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        {
          id: v4(),
          title: 'To Do',
          cards: [
              {
                id: v4(),
                text: 'Task to do...'
              }
          ]
        },
        {
          id: v4(),
          title: 'In Progress',
          cards: [
              {
                id: v4(),
                text: 'Task in progress...'
              }
          ]
        },
        {
          id: v4(),
          title: 'Done',
          cards: [
              {
                id: v4(),
                text: 'Task done...'
              }
          ]
        }
      ]
    };

    this.updateCards = this.updateCards.bind(this);
    this.editCard = this.editCard.bind(this);
  }

  updateCards(newCard, id) {
    const newCardFormatted = {
      id: v4(),
      text: newCard
    };
    const index = findIndex(this.state.lists, id);
    const a = this.state.lists;
    a[index].cards.push(newCardFormatted);
    this.setState({
      lists: a
    });
  }

  // TODO: this needs fixing
  editCard(text, listId, cardId) {
    const listIndex = findIndex(this.state.lists, listId);
    const cardIndex = findIndex(this.state.lists[listIndex].cards, cardId);
    const listToEdit = this.state.lists;
    const formattedComment = {
      id: cardIndex,
      text: text
    };
    listToEdit[listIndex].cards[cardIndex] = formattedComment;
    this.setState({
      lists: listToEdit
    });
  }

  render() {
    return (
      <div className="kanban-board">
        {this.state.lists.map((list) => {
          return (
            <div className="kanban-list" key={list.id}>
              <List 
                editCard={this.editCard}
                updateCards={this.updateCards} 
                list={list}
              />
          </div>);
        })}
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
