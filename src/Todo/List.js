import React from 'react';
import styled from '@emotion/styled';
import AddACard from './AddACard';
import Card from './Card';

export default class List extends React.Component {
  render () {
    const StyledList = styled.div`
      width: 100%
    `;

    return (
      <StyledList>
          {this.props.cards.map((card) => (
            <Card deleteCard={this.props.deleteCard} key={card.id} card={card}/>
          ))}
        <AddACard addCard={this.props.addCard} />
      </StyledList>
    );
  }
}
