import { NotImplementedError } from "../extensions/index.js";

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let encoded = [];
  let counter = 1;
  let arr = str.split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      counter++;
    } else {
      if (counter > 1) {
        encoded.push(counter);
      }
      encoded.push(arr[i]);
      counter = 1;
    }
  }

  return encoded.join("");
}
