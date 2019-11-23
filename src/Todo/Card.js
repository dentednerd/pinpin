import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const StyledCard = styled.div`
  background: #828dac;
  height: 2rem;
  width: calc(40vw - 4rem);
  border: none;
  border-radius: 0.25rem;
  color: white;
  margin: 0 0 0.5rem;
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

  span {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const Card = (props) => {
  const { card, deleteCard } = props;

  return (
    <StyledCard onClick={() => deleteCard()}>
      <span>{card.text}</span>
    </StyledCard>
  );
}

Card.propTypes = {
  card: PropTypes.object.isRequired,
  deleteCard: PropTypes.func.isRequired
};

export default Card;