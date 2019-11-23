import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
import { useInterval } from '../utils';
import Weather from '../Weather';
import { getLocalName, setLocalName } from '../utils';
import {
  sectionOfDay,
  dayOfMonth,
  month,
} from './utils';

dayjs.extend(AdvancedFormat);

const Greeter = () => {
  const StyledGreeter = styled.section`
  text-align: left;

    h1 {
      font-family: 'Pangolin', cursive;
      font-weight: lighter;
      font-size: 3rem;
      margin: 0px;
    }
  `;

  const [name, setName] = useState(getLocalName());
  const [time, setTime] = useState(dayjs().format('HH:mm'));

  useInterval(() => {
    setName(getLocalName());
    setTime(dayjs().format('HH:mm'));
  }, 1000);

  useEffect(() => {
    const storedName = getLocalName();
    if (!storedName) {
      setLocalName();
    }
    setName(storedName);
  }, [])

  return (
    <StyledGreeter>
      <h1>Good {sectionOfDay()}, {name}.</h1>
      <Weather />
      <p>Right now it's {time} on the {dayOfMonth} of {month}.</p>
    </StyledGreeter>
  );
}

export default Greeter;
