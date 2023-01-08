const moment = require('moment-timezone');
const waktuIndoBesok = moment()
  .tz('Asia/Jakarta')
  .add(1, 'd')
  .format('YYYY-MM-DD');
const waktuIndoNow = moment().tz('Asia/Jakarta').format('YYYY-MM-DD');
// const waktubeda = waktuIndo.tz('America/Los_Angeles').format();
console.log(waktuIndoBesok);
console.log(waktuIndoNow);
const waktu = '2023-01-03T17:00:00.000Z';

console.log(moment(waktuIndoBesok).isSameOrBefore(waktuIndoNow, 'day'));
console.log(moment(waktu).format('YYYY-MM-DD'));
