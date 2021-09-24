const { createUserService } = require('../services/userService');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

    const result = await createUserService(name, email, password);
    if (typeof result === 'string') {
      return res.status(409).json({ message: result });
    }

    return res.status(201).json(result);
};

module.exports = { createUser };
