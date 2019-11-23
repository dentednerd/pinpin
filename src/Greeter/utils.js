import dayjs from 'dayjs';
import AdvancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(AdvancedFormat);

const amPm = dayjs().format('A');
const dayOfMonth = dayjs().format('Do');
const hour = dayjs().format('HH');
const month = dayjs().format('MMMM');
const sectionOfDay = () => {
  if (amPm === 'AM') { return 'morning'}
  if (amPm === 'PM' && hour < 17) { return 'afternoon'}
  if (amPm === 'PM' && hour >= 17) { return 'evening' }
}

export {
  sectionOfDay,
  dayOfMonth,
  month
}
