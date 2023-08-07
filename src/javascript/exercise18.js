import moment from 'moment';
import momentTZ from 'moment-timezone';


const inputString = "1_1685026928756";

const removePrefix = str => str.split('_')[1];

const numbersAfterUnderscore = removePrefix(inputString);
console.log(numbersAfterUnderscore); // Resultado: "1685026928756"

const timezone = "America/Costa_Rica";
const hourToSet = 9;
const timeAt9AM = moment.tz(timezone).hour(hourToSet).minute(0).second(0).millisecond(0);

// Si la hora actual es después de las 9 AM, se establece la hora para mañana a las 9 AM.
const currentTime = moment.tz(timezone);
const targetTime = currentTime.isAfter(timeAt9AM) ? timeAt9AM.add(1, 'day') : timeAt9AM;

console.log(targetTime.format('HH:mm:ss'));