/**
 * @returns {number} day - The current day of the year
 * @example 70
 * */ 
const today = new Date();
const start = new Date(today.getFullYear(), 0, 0);
const diff = today - start;
const oneDay = 1000 * 60 * 60 * 24;
export const day = Math.floor(diff / oneDay);


export function checkOdd(num) { 
  if (num % 2 == 0) {
    return 'even';
  }
  return 'odd';
}