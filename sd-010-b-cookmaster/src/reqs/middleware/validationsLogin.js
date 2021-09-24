const verifyEmail = (req, res, next) => {
  const { email } = req.body;
  if (!email) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

const verifyPassword = (req, res, next) => {
  const { password } = req.body;
  if (!password) {
    return res.status(401).json({ message: 'All fields must be filled' });
  }
  next();
};

module.exports = { verifyPassword, verifyEmail };
