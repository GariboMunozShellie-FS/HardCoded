require('dotenv').config();
const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

// Data the should be kept a secret ----->

const email = 'example@email.com'
const password = 'secretPassword';
const secret = 'MySuperSecretKey';

// ---------------------------------------

router.use(express.json());

router.get('/secured', (req, res) => {
    const token = jwt.sign({ email: email, password: password }, secret);

    res.status(200).json({
      message: `Service is Up and you were able to use repo WITHOUT a .env file`,
      method: req.method,
      token: token
    });
});

module.exports = router