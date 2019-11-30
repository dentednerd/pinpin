import React from 'react';
import styled from '@emotion/styled';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import { getLocalName, setLocalName, getLocalLocation, setLocalLocation } from '../utils';

const StyledSettings = styled.section`
  animation: fadein 1s;

  @keyframes fadein {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const Settings = ({ toggleShowSettings }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const newName = document.forms[0].childNodes[0].childNodes[1].value;
    const newLocation = document.forms[0].childNodes[1].childNodes[1].value;
    newName && setLocalName(newName);
    newLocation && setLocalLocation(newLocation);
    toggleShowSettings(false);
  }

  const Section = styled.div`
    position: relative;
    padding: 1rem;
    margin-bottom: 1rem;
    max-height: 75vh;
    width: calc(40vw - 2rem);
    min-width: calc(40vw - 2rem);
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  `;

  const TitleCard = styled.section`
    position: absolute;
    top: -1.5rem;
    right: 1rem;
    height: 2rem;
    border: none;
    border-radius: 0.25rem;
    background: #717c9b;
    color: #ffffff;
    font-family: 'Pangolin', cursive;
    height: 2rem;
    padding: 0 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items:center;
  `;

  return (
    <StyledSettings>
      <form
        onSubmit={handleSubmit}
      >
        <Section>
          <TitleCard>your name</TitleCard>
          <Input
            placeholder={getLocalName()}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = getLocalName()}
            autoFocus={false}
          />
        </Section>

        <Section>
          <TitleCard>your location</TitleCard>
          <Input
            placeholder={getLocalLocation()}
            onFocus={(e) => e.target.placeholder = ''}
            onBlur={(e) => e.target.placeholder = getLocalLocation()}
            autoFocus={false}
          />
        </Section>
        <Button
          type="submit"
          text='update settings'
        />        
      </form>
    </StyledSettings>
  )
}

export default Settings;
