'use strict';

/**
 * Creates a new Date object from the given value.
 * 
 * @param {any} val - The value to create the Date object from.
 * @returns {Date} A new Date object.
 */

exports.D = function(val) {
  return new Date(val);
};

/**
 * Creates a new Date object representing the current date and time.
 * 
 * @returns {Date} A new Date object representing the current date and time.
 */

exports.now = function now() {
  return new Date();
};

/**
 * Creates a new Date object representing the next midnight from the given date.
 * If no date is provided, it defaults to the current date and time.
 * 
 * @param {Date} [date] - The date from which to calculate the next midnight.
 * @returns {Date} A new Date object representing the next midnight.
 */

exports.nextMidnight = function nextMidnight(date) {
  date = date ?? exports.now();
  date.setDate(date.getDate() + 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

/**
 * Converts a Date object to a string in the format 'YYYYMMDD' or 'YYYY-MM-DD'
 * 
 * @param {Date} d - The Date object to be converted
 * @param {Boolean} dashes - Set to true to return 'YYYY-MM-DD'
 * @returns {string} A string representing the desired format
 */

exports.toYYYYMMDD = function toYYYYMMDD(d, dashes) {
  const year = d.getFullYear() * 1e4;
  const month = (d.getMonth() + 1) * 100;
  const day = d.getDate();
  if (dashes) {
    return year + '-' + month + '-' + day; // "2021-11-24"
  }
  return year + month + day + ''; // `+ ''` to convert to string from number, 20211124 => "20211124"
};

exports.oneSecondMS = 1000;
exports.oneMinuteMS = exports.oneSecondMS * 60;
exports.oneHourMS = exports.oneMinuteMS * 60;
exports.oneDayMS = exports.oneHourMS * 24;
exports.oneWeekMS = exports.oneDayMS * 7;

/**
 * Return the number of milliseconds in `num` seconds
 * 
 * @param {number} num - The number of seconds to convert to milliseconds.
 * @returns {number} The equivalent number of milliseconds.
 */

exports.seconds = function seconds(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Parameter must be a number, got ' + typeof num);
  }
  return num * time.oneSecondMS;
};

/**
 * Return the number of milliseconds in `num` minutes
 * 
 * @param {number} num - The number of minutes to convert to milliseconds.
 * @returns {number} The equivalent number of milliseconds.
 */

exports.minutes = function minutes(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Parameter must be a number, got ' + typeof num);
  }
  return num * time.oneMinuteMS;
};

/**
 * Return the number of milliseconds in `num` hours
 * 
 * @param {number} num - The number of hours to convert to milliseconds.
 * @returns {number} The equivalent number of milliseconds.
 */

exports.hours = function hours(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Parameter must be a number, got ' + typeof num);
  }
  return num * time.oneHourMS;
};

/**
 * Return the number of milliseconds in `num` days
 * 
 * @param {number} num - The number of days to convert to milliseconds.
 * @returns {number} The equivalent number of milliseconds.
 */

exports.days = function days(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Parameter must be a number, got ' + typeof num);
  }
  return num * time.oneDayMS;
};

/**
 * Return the number of milliseconds in `num` weeks
 * 
 * @param {number} num - The number of weeks to convert to milliseconds.
 * @returns {number} The equivalent number of milliseconds.
 */

exports.weeks = function weeks(num) {
  if (typeof num !== 'number') {
    throw new TypeError('Parameter must be a number, got ' + typeof num);
  }
  return num * time.oneWeekMS;
};
