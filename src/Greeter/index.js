import React from 'react';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';

const week = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
}
dayjs.extend(AdvancedFormat);
const amPm = dayjs().format('A');
const dayOfWeek = week[dayjs().day()];
const dayOfMonth = dayjs().format('Do');
const hour = dayjs().format('HH');
const minute = dayjs().format('mm');
const month = dayjs().format('MMMM');
const sectionOfDay = () => {
  if (amPm === 'AM') { return 'morning'}
  if (amPm === 'PM' && hour < 17) { return 'afternoon'}
  if (amPm === 'PM' && hour >= 17) { return 'evening' }
}

const weatherConditions = {
  "Thunderstorm": "stormy",
  "Drizzle": "drizzly",
  "Rain": "rainy",
  "Snow": "snowy",
  "Mist": "misty",
  "Smoke": "smoky",
  "Haze": "hazy",
  "Dust": "dusty",
  "Fog": "foggy",
  "Sand": "sandy",
  "Ash": "ashy",
  "Squall": "stormy",
  "Tornado": "stormy",
  "Clear": "sunny",
  "Clouds": "cloudy"
}

const Greeter = (props) => (
  <section className="greeter">
    <h1>Good {sectionOfDay()}, {props.name}.</h1>
    <p>It's a {weatherConditions[props.condition]} {dayOfWeek} {sectionOfDay()} in {props.location.split(',')[0]}.</p>
    <p>Right now it's {hour}:{minute} on the {dayOfMonth} of {month}.</p>
  </section>
);

export default Greeter;
