const { NotImplementedError } = require('../extensions/index.js');

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
class VigenereCipheringMachine {

  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    try {
      if (key.length < message.length) {
        key = key.repeat(Math.ceil(message.length / key.length));
      }
      const arrKey = key.toUpperCase().split('').map(el => el.charCodeAt() - 65);
      const arrMessage = message.toUpperCase().split('').map(el => el.charCodeAt());

      let count = 0;
      for(let i = 0; i < arrMessage.length; i++) {
        if (arrMessage[i] > 64 && arrMessage[i] < 91) {
          arrMessage[i] = arrMessage[i] + arrKey[i - count];
          if (arrMessage[i] >= 91) {
            arrMessage[i] =  arrMessage[i] - 26;
          }
        } else {
          count++;
          arrMessage[i] = arrMessage[i];
        }
        arrMessage[i] = String.fromCharCode(arrMessage[i]);
      }

      if(this.isDirect) {
        return arrMessage.join('');
      } else {
        return arrMessage.reverse().join('');
      }
      
    } catch(e) {
      throw new Error('Incorrect arguments!');
    }
  }

  decrypt(encryptedMessage, key) {
    try {
      if (key.length < encryptedMessage.length) {
        key = key.repeat(Math.ceil(encryptedMessage.length / key.length));
      }
      const arrKey = key.toUpperCase().split('').map(el => el.charCodeAt() - 65);
      const arrMessage = encryptedMessage.toUpperCase().split('').map(el => el.charCodeAt());

      let count = 0;
      for(let i = 0; i < arrMessage.length; i++) {
        if (arrMessage[i] > 64 && arrMessage[i] < 91) {
          arrMessage[i] = arrMessage[i] - arrKey[i - count];

          if (arrMessage[i] < 65) {
            arrMessage[i] =  arrMessage[i] + 26;
          }
        } else {
          count++;
          arrMessage[i] = arrMessage[i];
        }
        arrMessage[i] = String.fromCharCode(arrMessage[i]);
      }
     
      if(this.isDirect) {
        return arrMessage.join('');
      } else {
        return arrMessage.reverse().join('');
      }
    } catch(e) {
      throw new Error('Incorrect arguments!');
    }
  }
}

const directMachine = new VigenereCipheringMachine();
console.log(directMachine.encrypt('PK@E', 'alphonse'));
console.log(directMachine.decrypt('PV@T', 'alphonse'));
module.exports = {
  VigenereCipheringMachine
};
