import React from 'react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat);

const dayOfMonth = dayjs().format('Do');
const hour = dayjs().format('HH');
const minute = dayjs().format('mm');
const month = dayjs().format('MMMM');

const TimeDate = () => {
  return (
    <p>Right now it's {hour}:{minute} on the {dayOfMonth} of {month}.</p>
  );
}

export default TimeDate;
