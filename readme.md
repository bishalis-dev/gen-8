# Gen8

Gen8 is an open-source Node.js library for generating random data securely using cryptography. It provides functions for generating secret keys, passwords, OTP (One-Time Password) numbers, and more.

## Installation

You can install Gen8 via npm:

```bash
npm install gen8
``` 
```javascript
import { OTP, generateSecretKey, generatePassword } from 'gen8';

// Generate Secret Key with Uppercase Letters and Split
const skey = generateSecretKey(32, {
    uppercase: true,
    lowercase: false,
    split: {
        split: true,
        separator: '-',
        splitLength: 4
    }
});
console.log("Generated Secret Key:", skey);

// Generate Secret Key with Uppercase and Lowercase Letters, and Split
const key = generateSecretKey(
    32, 
    { 
        uppercase: true, lowercase: true, 
        split: { 
            split: true, 
            separator: '-', 
            splitLength: 6
        } 
    }
);
console.log("Generated Secret Key:", key);

// Generate OTP with Numbers and Uppercase Letters
const otp = OTP(
    6, 
    { 
        numbers: true, 
        alphabets: true, 
        specialCharacters: false 
    }, 
    { 
        uppercase: true, 
        lowercase: false
    }
);
console.log("Generated OTP:", otp);

// Generate Password with Numbers, Alphabets, and Special Characters
const password = generatePassword(12, 
    { 
        numbers: true, 
        alphabets: true, 
        specialCharacters: true 
    }
);
console.log("Generated Password:", password);

```
## Documentation:
`generateSecretKey(length: number, options: object, writeToFile: boolean) => string`

Generates a secret key of the specified length.

- `length`: Length of the secret key (`default: 32`).
- `options`: An object containing the following optional parameters:
    - `uppercase`: Include uppercase letters (`default: true`).
    - `lowercase`: Include lowercase letters (`default: false`).
    - `split`: An object with the following properties for splitting the key (`default: { split: true, separator: '-', splitLength: 4 }`):
        - `split`: Boolean indicating whether to split the key.
        - `separator`: Separator for splitting the key.
        - `splitLength`: Length of each segment.
        - `writeToFile`: Boolean indicating whether to write the key to a file (`default: false`). In case of `true`, the key will be written to a file that you provide (`default: .env`) in the current directory.
`generatePassword(length: number, options: object) => string`
Generates a password of the specified length.

`length`: Length of the password (`default: 12`).
`options`: An object containing the following optional parameters:
`numbers`: Include numbers (`default: true`).
`alphabets`: Include alphabetic characters (`default: true`).
`specialCharacters`: Include special characters (`default: true`).

`OTP(length: number, options: object, caseOptions: object) => string`
Generates a One-Time Password (OTP) of the specified length.

`length`: Length of the OTP (`default: 6`).
`options`: An object containing the following optional parameters:
`numbers`: Include numbers (`default: true`).
`alphabets`: Include alphabetic characters (`default: false`).
`specialCharacters`: Include special characters (`default: false`).
`caseOptions`: An object containing the following optional parameters:
`uppercase`: Convert the OTP to uppercase (`default: false`).
`lowercase`: Convert the OTP to lowercase (`default: false`).

`randomInt(min: number, max: number) => number`

Generates a random integer between min (inclusive) and max (inclusive).

`min`: Minimum value for the random integer (inclusive).
`max`: Maximum value for the random integer (inclusive).

# Author
- [Bishal KC](
    - [GitHub](https://github.com/bishalis-dev)
    - [LinkedIn](https://www.linkedin.com/in/bishalis-dev/)
    - [Instagram](https://www.instagram.com/bishalis.dev/)
    - [Facebook](https://www.facebook.com/bishalis.dev)
    - [Website](https://bishalis.dev/)
)