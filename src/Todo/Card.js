import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const StyledCard = styled.div`
      background: #828dac;
      height: 4rem;
      width: calc(100% - 2rem);
      border: none;
      border-radius: 0.25rem;
      color: white;
      margin: 0.5rem 0;
      padding: 0 1rem;
      display: flex;
      flex-flow: row nowrap;
      justify-content: space-between;
      align-items:center;
      font-size: 1rem;

      &:hover { 
        background-color:#d3d3d3;
      }

      .delete-card {
        background: white;
        border: solid 1px white;
        border-radius: 4px;
        color: #828dac;
        box-shadow: 0;
      }
    `;

    const CloseButton = styled.button`
      background-color: #828dac;
      color: white;
      height: 1rem;
      width: 1rem;
      border: none;
      border-radius: 50%;
      margin: 0;
      padding: 0;
      font-weight: bold;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
    `;
    return (
      <StyledCard>
        {this.props.card.text}
        <CloseButton onClick={() => this.props.deleteCard(this.props.card.id)}>x</CloseButton>
      </StyledCard>
    );
  }
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;