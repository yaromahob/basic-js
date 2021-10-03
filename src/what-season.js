import { NotImplementedError } from "../extensions/index.js";

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
export default function getSeason(date) {
  if (date === undefined) {
    return "Unable to determine the time of year!";
  }

  try {
    date.getUTCDate();
  } catch (error) {
    throw new Error("Invalid date!");
  }

  if (isValidDate(date) === false) {
    throw new Error("Invalid date!");
  }
  const monthSeason = [
    "winter",
    "winter",
    "spring",
    "spring",
    "spring",
    "summer",
    "summer",
    "summer",
    "autumn",
    "autumn",
    "autumn",
    "winter",
  ];

  function isValidDate(date) {
    return date instanceof Date && !isNaN(date);
  }

  return monthSeason[date.getMonth()];
}
