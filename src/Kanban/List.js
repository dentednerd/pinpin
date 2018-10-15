import React from 'react';
import PropTypes from 'prop-types';

import AddACard from './AddACard';
import Card from './Card';

class List extends React.Component {
  render () {
    return (
      <div className="list">
          {this.props.cards.map((card) => {
            return (
              <Card deleteCard={this.props.deleteCard} key={card.id} card={card}/>
            );
          })}
        <AddACard addCard={this.props.addCard} />
      </div>
    );
  }
}

List.propTypes = {
  cards: PropTypes.array.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default List;