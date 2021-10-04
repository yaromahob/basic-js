import { NotImplementedError } from "../extensions/index.js";

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 *
 * @example
 *
 * const directMachine = new VigenereCipheringMachine();
 *
 * const reverseMachine = new VigenereCipheringMachine(false);
 *
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 *
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
export default class VigenereCipheringMachine {
  abc = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  constructor(value = true) {
    this.direct = value;
  }

  decrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let temp;
    let i = 0;
    str = this.direct
      ? str.toUpperCase().split("")
      : str.toUpperCase().split("").reverse();
    key = this.direct
      ? key.toUpperCase().split("")
      : key.toUpperCase().split("").reverse();

    return str
      .map((item) => {
        if (this.abc.indexOf(item) == -1) {
          return item;
        } else {
          i = i < key.length ? i : 0;
          temp =
            this.abc.length +
            this.abc.indexOf(item) -
            this.abc.indexOf(key[i++]);
          return this.abc[
            temp < this.abc.length ? temp : temp - this.abc.length
          ];
        }
      })
      .join("");
  }

  encrypt(str, key) {
    if (str == undefined || key == undefined) {
      throw new Error("Incorrect arguments!");
    }
    let temp = 0;
    let i = 0;
    str = this.direct
      ? str.toUpperCase().split("")
      : str.toUpperCase().split("").reverse();
    key = this.direct
      ? key.toUpperCase().split("")
      : key.toUpperCase().split("").reverse();

    return str
      .map((item) => {
        if (!this.abc.includes(item)) return item;
        else {
          i = i < key.length ? i : 0;
          temp = this.abc.indexOf(item) + this.abc.indexOf(key[i++]);
          return this.abc[
            temp < this.abc.length ? temp : temp - this.abc.length
          ];
        }
      })
      .join("");
  }
}
