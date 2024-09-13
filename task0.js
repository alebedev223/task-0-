const today = new Date();
const nextYear = today.getFullYear()+1;
const newYear = new Date(nextYear,0,1);
const msTime = newYear-today;
const secTime = Math.floor((msTime/1000));
const minTime = Math.floor(secTime/60);
const hourTime = Math.floor(minTime/60);
const daysTime = Math.floor(hourTime/24);
console.log(`До нового года ${daysTime} дней, ${hourTime%24} часов, ${minTime%60} минут и ${secTime%60} секунд.`);