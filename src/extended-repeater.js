const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(str, options) {
  str = String(str);

  if (options.addition || String(options.addition) != 'undefined') {
    const arrAdd = repeat(String(options.addition), options.additionRepeatTimes);
    str += addSeparator(arrAdd, options.additionSeparator, true);
  }
  
    const arr = repeat(str, options.repeatTimes);
    return addSeparator(arr, options.separator, false);
}

function repeat(str, repeatTimes) {
  let arr = [str];
  if (repeatTimes) {
    for(let i = 0; i < repeatTimes - 1; i++){
      arr.push(str);
    }
  }
  return arr;
}

function addSeparator (arr, separator , isAdd) {
  if(separator) {
    return arr.join(separator);
  } else if(isAdd) {
    return arr.join('|');
  } else {
    return arr.join('+');
  }
}

console.log(repeater(null, { repeatTimes: 3, separator: '??? ', addition: null, additionRepeatTimes: 3, additionSeparator: '!!!' }));

module.exports = {
  repeater,
};
