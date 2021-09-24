const validIngre = (req, res, next) => {
  const { ingredients } = req.body;
  if (!ingredients) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

const validPreparation = (req, res, next) => {
  const { preparation } = req.body;
  if (!preparation) return res.status(400).json({ message: 'Invalid entries. Try again.' });
  next();
};

module.exports = { validIngre, validPreparation };
