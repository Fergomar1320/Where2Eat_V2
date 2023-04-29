const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const UserCtrl = require('../Controllers/userController');


router.get('/login', async (req, res) => {
  const { username, password } = req.query;

  // Call the verifyUser function to check if the user exists and the password is correct
  const user = await UserCtrl.verifyUser(username, password);

  if (!user) {
    // User not found or incorrect password
    res.json({ token: null });
    return;
  }

  // Generate a JWT token and send it as a response
  const token = jwt.sign({ id: user.id }, UserCtrl.JWT_SECRET);
  res.json({ token });
});

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const newUser = await UserCtrl.createUser(username, password);
    const token = jwt.sign({ id: newUser.id }, UserCtrl.JWT_SECRET);
    res.json({ token });
  } catch (error) {
    // Return error message if username is already taken
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;

