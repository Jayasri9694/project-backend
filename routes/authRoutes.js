const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authController');

router.post('/register', register);
// POST /api/login
router.post('/login', (req, res) => {
    // Your logic for login (check email, password, etc.)
    res.send('Login successful!');
});
module.exports = router;