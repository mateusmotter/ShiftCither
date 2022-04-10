# ShiftCither
## JS Class used to encrypt and decrypt strings.

### Coding Challenge from Codecademy Full-Stack Engineering career path:

#### Description:

A shift cipher takes a plain text message and shifts each letter forward in the alphabet by a given number. For example, a shift cipher with a shift of 1 would turn the string 'hello' to 'ifmmp'.

Create a class ShiftCipher that takes the numerical value of the shift as a constructor parameter. The class should have two methods:

- encrypt: takes a plain text string and returns a capitalized string with each letter shifted forward in the alphabet based on the set shift value.
- decrypt: takes an encrypted message and returns a lower case string with each letter shifted back in the alphabet based on the set shift value.
- In both methods, any character outside the alphabet should remain the same.
- But if a character is shifted outside the alphabet in either direction it should be wrapped around to the other side. For example, encrypting a y with a shift of 4 results in C and decrypting an A with a shift of 1 result in z.

The code has comments explaining the logic and methods I used in order to achieve the final results.
It used <a src="https://en.wikipedia.org/wiki/List_of_Unicode_characters" target='_blank'>Unicode Characters</a> values in order to navigate in the alphabet.