const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = async function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'Token puuttuu, autorisointi epäonnistui' });
  }

  // Verify token
  try {
    await jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        res.status(401).json({ msg: 'Token ei kelpaa' });
      }
      else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('autorisointi middleware prakaa..?')
    res.status(500).json({ msg: 'Server Error' });
  }
};
