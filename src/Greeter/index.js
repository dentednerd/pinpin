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

const Greeter = (props) => {
  const weatherCondition = () => {
    switch(props.condition) {
      case "Thunderstorm": 
        return "a stormy";
      case "Drizzle":
        return "a drizzly";
      case "Rain":
        return "a rainy";
      case "Snow":
        return "a snowy";
      case "Mist":
        return "a misty";
      case "Smoke":
        return "a smoky";
      case "Haze":
        return "a hazy";
      case "Dust":
        return "a dusty";
      case "Fog":
        return "a foggy";
      case "Sand":
        return "a sandy";
      case "Ash":
        return "an ashy";
      case "Squall":
        return "a stormy";
      case "Tornado":
        return "a stormy";
      case "Clear":
        return "a sunny";
      case "Clouds":
        return "a cloudy";
      default:
        return null;
    }
  }

  return (
    <section className="greeter">
      <h1>Good {sectionOfDay()}, {props.name ? props.name : 'you'}.</h1>
      <p>It's {weatherCondition()} {dayOfWeek} {sectionOfDay()}{props.location && ` in ${props.location.split(',')[0]}`}.</p>
      <p>Right now it's {hour}:{minute} on the {dayOfMonth} of {month}.</p>
    </section>
  );
}


export default Greeter;
