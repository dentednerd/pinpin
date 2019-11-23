import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat);

const getLocalName = () => localStorage.getItem('pinpinName');
const setLocalName = () => {
  localStorage.removeItem('pinpinName');
  localStorage.setItem('pinpinName', prompt('What can pinpin call you?', 'Your name'));
}

const getLocalLocation = () => localStorage.getItem('pinpinLocation');
const setLocalLocation = () => {
  localStorage.removeItem('pinpinLocation');
  localStorage.setItem('pinpinLocation', prompt('Where are you? (City name, 2-letter country code)', 'e.g. London,UK'));
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
  hour,
  sectionOfDay,
  currentTitle
}
