const encrypt = require('./script');

const payload = {
  username: 'machan',
  role: 'student'
};

const secret = 'mySecretKey123'; // in real projects, store this in .env

const token = encrypt(payload, secret);
console.log('Generated JWT:', token);
