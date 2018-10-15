import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    return (
      <div className='card'>
        {this.props.card.text}
        <button onClick={() => this.props.deleteCard(this.props.card.id)} className='delete-card'>
          Delete
        </button>
      </div>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;