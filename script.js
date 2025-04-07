const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  // Create and return the JWT with 1 hour expiry
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

module.exports = encrypt;
