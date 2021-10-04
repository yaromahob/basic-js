import { NotImplementedError } from "../extensions/index.js";

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const strOne = getLetterObj(s1);
  const strTwo = getLetterObj(s2);
  const keys =
    s1.length > s2.length ? Object.keys(strOne) : Object.keys(strTwo);
  let counter = 0;
  for (let i = 0; i < keys.length; i++) {
    if (strOne[keys[i]] && strTwo[keys[i]]) {
      counter = Math.min(strOne[keys[i]], strTwo[keys[i]]) + counter;
    }
  }
  return counter;
}

function getLetterObj(str) {
  const obj = {};

  for (let i of str) {
    if (obj[i] === undefined) {
      obj[i] = 1;
    } else {
      obj[i]++;
    }
  }

  return obj;
}
