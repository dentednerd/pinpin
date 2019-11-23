import React, { useState } from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import Input from '../atoms/Input';

const AddButtons = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  min-width: calc(30vw + 2rem);
`;

const AddACard = (props) => {
  const { addCard, id } = props;
  const [showForm, toggleShowForm] = useState(false);


  const handleSubmit = (event) => {
    event.preventDefault();
    const newCard = event.target.children[0].value;
    addCard(newCard, id);
    toggleShowForm(false);
  }

  const handleEnterKeyPress = (event) => {
    if (event && event.key === 'Enter') {
      addCard(document.forms[0].childNodes[0].value, id);
    }
  }

  return (
    <div>
      {
        showForm
        ? <form
            className="ListForm"
            onSubmit={handleSubmit}
          >
            <Input
              className='AddACardForm'
              onKeyPress={handleEnterKeyPress}
              style={{ fontSize: '1rem' }}
            />
            <AddButtons>
              <Button
                type="submit"
                text='add task'
              />
              <Button
                onClick={() => toggleShowForm(false)}
                text='cancel'
              />
            </AddButtons>
          </form>
        : (
          <Button
            href="#"
            onClick={() => toggleShowForm(!showForm)}
            text='add thought'
          />
        )
      }
    </div>
  );
}

export default AddACard;
