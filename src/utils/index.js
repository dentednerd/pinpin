import useInterval from './useInterval';
import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat);

const getLocalName = () => localStorage.getItem('pinpinName');
const setLocalName = (newName) => localStorage.setItem('pinpinName', newName);

const getLocalLocation = () => localStorage.getItem('pinpinLocation');
const setLocalLocation = (newLocation) => localStorage.setItem('pinpinLocation', newLocation);

const getLocalWeather = () => localStorage.getItem('pinpinWeather');
const setLocalWeather = (weather) => {
  localStorage.removeItem('pinpinWeather');
  localStorage.setItem('pinpinWeather', weather);
}

const amPm = dayjs().format('A');
const hour = dayjs().format('HH');
const sectionOfDay = () => {
  if (amPm === 'AM') { return 'morning'}
  if (amPm === 'PM' && hour < 17) { return 'afternoon'}
  if (amPm === 'PM' && hour >= 17) { return 'evening' }
}

let currentTitle;

if (hour < 12) {
  currentTitle = "Good morning"
}

if (hour >= 12 && hour < 18) {
  currentTitle = "Good afternoon"
}

if (hour >= 18) {
  currentTitle = "Good evening"
}

export {
  getLocalName,
  setLocalName,
  getLocalLocation,
  setLocalLocation,
  getLocalWeather,
  setLocalWeather,
  hour,
  sectionOfDay,
  currentTitle,
  useInterval
}
