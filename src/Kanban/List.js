import React from 'react';
import PropTypes from 'prop-types';

import ListAdd from './ListAdd';
import Card from './Card';

class List extends React.Component {
  render () {
    return (
      <div className="List">
        <h2>{this.props.list.title}</h2>
          {this.props.list.cards.map((card) => {
            return (
              <Card editCard={this.props.editCard} id={this.props.id} key={card.id} card={card}/>
            );
          })}
        <ListAdd id={this.props.list.id} updateCards={this.props.updateCards} />
      </div>
    );
  }
}

List.propTypes = {
    editListTitle: PropTypes.func.isRequired,
    list: PropTypes.object.isRequired,
    updateCards: PropTypes.func.isRequired,
    editCard: PropTypes.func.isRequired
};

export default List;