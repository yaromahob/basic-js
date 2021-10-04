import { NotImplementedError } from "../extensions/index.js";

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  const separator = options.separator ? options.separator : "+";
  const repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  const additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  const additionalSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";
  const arrayMain = [];
  let addition;

  if (typeof options.addition == "undefined") {
    addition = "";
  } else {
    addition = options.addition + "";
  }

  for (let i = 0; i < repeatTimes; i += 1) {
    let separator = [];

    for (let j = 0; j < additionRepeatTimes; j += 1) {
      separator.push(addition);
    }

    arrayMain.push(str + separator.join(additionalSeparator));
  }
  return arrayMain.join(separator);
}
