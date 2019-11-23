import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat);

const week = {
  0: 'Sunday',
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday'
};

const dayOfWeek = week[dayjs().day()];
const amPm = dayjs().format('A');
const hour = dayjs().format('HH');
const sectionOfDay = () => {
  if (amPm === 'AM') { return 'morning'}
  if (amPm === 'PM' && hour < 17) { return 'afternoon'}
  if (amPm === 'PM' && hour >= 17) { return 'evening' }
}

const weatherCondition = (condition) => {
  switch(condition) {
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
      return hour >= 6 && hour <= 18 ? "a sunny" : "a clear";
    case "Clouds":
      return "a cloudy";
    default:
      return null;
  }
};

const weatherKey = process.env.REACT_APP_OPENWEATHER_API_KEY;

export {
  weatherCondition,
  dayOfWeek,
  sectionOfDay,
  weatherKey
};
