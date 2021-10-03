import { NotImplementedError } from "../extensions/index.js";

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 *
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 *
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
export default function calculateHanoi(disksNumber, turnsSpeed) {
  let step = stepCount(disksNumber);

  function stepCount(x) {
    if (x === 1) return 1;
    let counter = 1 + stepCount(x - 1) * 2;
    return counter;
  }
  let secondStep = Math.floor((step / turnsSpeed) * 60 * 60);

  return { turns: step, seconds: secondStep };
}
