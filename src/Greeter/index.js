import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import styled from '@emotion/styled';
import Weather from '../Weather';

dayjs.extend(AdvancedFormat);
const amPm = dayjs().format('A');
const dayOfMonth = dayjs().format('Do');
const hour = dayjs().format('HH');
const minute = dayjs().format('mm');
const month = dayjs().format('MMMM');
const sectionOfDay = () => {
  if (amPm === 'AM') { return 'morning'}
  if (amPm === 'PM' && hour < 17) { return 'afternoon'}
  if (amPm === 'PM' && hour >= 17) { return 'evening' }
}

const Greeter = () => {
  const StyledGreeter = styled.section`
    text-align: left;
    animation: fadein 3s;

    @keyframes fadein {
      from { opacity: 0; }
      to   { opacity: 1; }
    }

    h1 {
      font-family: 'Pangolin', cursive;
      font-weight: lighter;
      font-size: 3rem;
      margin: 0px;
    }
  `;

  const [name, setName] = useState('you');

  useEffect(() => {
    const storedName = localStorage.getItem('pinpinName');
    if (!storedName) {
      localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
    }
    setName(storedName);
  })

  return (
    <StyledGreeter>
      <h1>Good {sectionOfDay()}, {name}.</h1>
      <Weather />
      <p>Right now it's {hour}:{minute} on the {dayOfMonth} of {month}.</p>
    </StyledGreeter>
  );
}

export default Greeter;
