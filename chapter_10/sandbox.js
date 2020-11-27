// Dates & Times

const now = new Date();

console.log(now);
console.log(typeof now);

// year, months, day, times

console.log('getFullYear:', now.getFullYear());
console.log('getMonth:', now.getMonth() + 1); // Jan is 0
console.log('getDate:', now.getDate());
console.log('getDay:', now.getDay());
console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds:', now.getSeconds());

// Timestamps

console.log('timestamp:', now.getTime()); //milliseconds since 12AM 01.01.1970.

// date strings

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toLocaleString());

// More timestamps

const before = new Date('November 1 2020 7:30:59');

console.log(now.getTime(), before.getTime());

// Diff from 2 dates
const diff = now.getTime() - before.getTime();
console.log('millisec:', diff);

// Min
const mins = Math.round(diff / 1000 / 60);
// Hours
const hours = Math.round(mins / 60);
// Days
const days = Math.round(hours / 24);
console.log('min:', mins, 'hours:', hours, 'days:', days);
console.log(`The Post was written ${days} ago.`);

// Converting timestamps into Date Object

const timestamp = 1675938474990; // int
console.log(new Date(timestamp));
