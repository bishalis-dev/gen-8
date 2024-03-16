import crypto from 'crypto';
import fs from 'fs';

const OTP = (
    length = 6,
    {
        numbers = true,
        alphabets = false,
        specialCharacters = false
    } = {},
    {
        uppercase = false,
        lowercase = false
    } = {}
) => {
    let characters = '';
    if (numbers) characters += '0123456789';
    if (alphabets) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (specialCharacters) characters += '!@#$%^&*()_+';
    if (uppercase) characters = characters.toUpperCase();
    if (lowercase) characters = characters.toLowerCase();

    // Use crypto module to generate random bytes
    const randomBytes = crypto.randomBytes(length);
    let OTP = '';
    for (let i = 0; i < length; i++) {
        const index = randomBytes[i] % characters.length;
        OTP += characters.charAt(index);
    }
    return OTP;
};
// sceret key is a function that will generate a sceret key for the user to use for different purposes like in jwt token, api keys and many more
// const crypto = require('crypto');

const generateSecretKey = (
    length = 32,
    {
        uppercase = true,
        lowercase = false,
        split = {
            split: true,
            separator: '-',
            splitLength: 4
        }
    } = {},
    writeToFile = {
        writeToFile: true,
        filename: '.env'
    }
) => {
    // Generate random bytes
    const secretKey = crypto.randomBytes(length);

    // Convert the bytes to a hexadecimal string
    let key = secretKey.toString('hex');

    // Apply uppercase if specified
    if (uppercase) {
        key = key.toUpperCase();
    }

    // Apply lowercase if specified
    if (lowercase) {
        key = key.toLowerCase();
    }

    // Split the key if specified
    const splitKey = [];
    if (split.split) {
        
        for (let i = 0; i < key.length; i += split.splitLength) {
            splitKey.push(key.substring(i, i + split.splitLength));
        }
        key = splitKey.join(split.separator);
    }
    
    if (writeToFile) {
        // Write the key to a file
        try {
            fs.writeFileSync(writeToFile.filename, `SECRETKEY=${key}\n`);
        }catch(err){
            console.log(err);
            return key;
        }
    }
    return key;
};

const generatePassword = (
    length = 12,
    {
        numbers = true,
        alphabets = true,
        specialCharacters = true
    } = {}
) => {
    let characters = '';
    if (numbers) characters += '0123456789';
    if (alphabets) characters += 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (specialCharacters) characters += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const index = crypto.randomInt(0, characters.length);
        password += characters.charAt(index);
    }
    return password;
};

const randomInt = (min, max) => {
    // using crypto module to generate random bytes
    const randomBytes = crypto.randomBytes(4);
    const buffer = Buffer.from(randomBytes);
    const number = buffer.readUInt32BE(0);
    return Math.floor(number / 0x100000000 * (max - min + 1) + min + 1);
};
const key = generateSecretKey(32, { uppercase: true, lowercase: true, split: { split: true, separator: '-', splitLength: 4 }
}, { writeToFile: true, filename: '.env' });
console.log("Generated Secret Key:", key);
module.exports = {
    OTP,
    generateSecretKey,
    generatePassword,
    randomInt
};