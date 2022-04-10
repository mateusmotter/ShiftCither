
class ShiftCipher {
    constructor(shiftValue) {
      this.shiftValue = shiftValue;
    }
    encrypt(string) {
      let unicodeArray = [];
      let newEncryptedString = [];
      //loops through every letter in the string and pushes the equivalent unicode value into an array;
      for (let i = 0; i < string.length; i++) {
        let unicode;
        //checks if the unicode value is part of the alphabet, if not, the shiftValue is not applied;
        if ((string.toLowerCase().charCodeAt(i)) < 97 || (string.toLowerCase().charCodeAt(i)) > 122) {
            unicode = string.toLowerCase().charCodeAt(i)
        } else {
            unicode = (string.toLowerCase().charCodeAt(i) + this.shiftValue);
        }
        //checks if the unicode value is beyond the alphabet, in case it is, it return the count back 26 values (back to 'a');
        if ((string.toLowerCase().charCodeAt(i) + this.shiftValue) > 122) {
            unicode -= 26;
        }
        unicodeArray.push(unicode);
      }
      //loops through every unicode value and uses the "String.fromCharCode" to turn it back into a letter;
      for (let i = 0; i < unicodeArray.length; i++) {
        newEncryptedString.push(String.fromCharCode(unicodeArray[i]));
      }
      //console.log(encryptedString);
      return newEncryptedString.join("").toUpperCase();
    }

    decrypt(string) {
        let unicodeArray = [];
        let decryptedString = [];
        //loops through every letter in the string and pushes the equivalent unicode value into an array;
        for (let i = 0; i < string.length; i++) {
          let unicode;
          //checks if the unicode value is part of the alphabet, if not, the shiftValue is not applied;
          if ((string.toLowerCase().charCodeAt(i)) < 97 || (string.toLowerCase().charCodeAt(i)) > 122) {
              unicode = string.toLowerCase().charCodeAt(i)
          } else {
              unicode = (string.toLowerCase().charCodeAt(i) - this.shiftValue);
          }
          //checks if the unicode value is before the alphabet, in case it is, it return the count up 26 values (back to 'z');
          //this 'if' had to be adjusted as only adding 26 positions to the unicode can cause non letters to be affected. A now condition was added to confirm whether the items being looped through is in the alphabet.
          if ((string.toLowerCase().charCodeAt(i) - this.shiftValue) < 97 && unicode === (string.toLowerCase().charCodeAt(i) - this.shiftValue)) {
              unicode += 26;
          }
          unicodeArray.push(unicode);
        }
        //loops through every unicode value and uses the "String.fromCharCode" to turn it back into a letter;
        for (let i = 0; i < unicodeArray.length; i++) {
            decryptedString.push(String.fromCharCode(unicodeArray[i]));
        }
        //console.log(unicodeArray);
        return decryptedString.join("").toUpperCase();
    }
  }

let test = new ShiftCipher(1);
//console.log(test.encrypt('Zarabatanas close 3pm on pb!:)'));
console.log(test.decrypt('a'));