import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background: #828dac;
  height: 2rem;
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
  cursor: pointer;

  &:hover { 
    background-color:#939ebd;
  }

  .delete-card {
    background: white;
    border: solid 1px white;
    border-radius: 4px;
    color: #828dac;
    box-shadow: 0;
  }
`;

const Card = (props) => {
  const { card, deleteCard } = props;

  return (
    <StyledCard onClick={() => deleteCard()}>
      {card.text}
    </StyledCard>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;