const express = require('express');
const router = express.Router();
const { getWhoAmI } = require('../controllers/whoami');

router.get('/', getWhoAmI);

module.exports = router;
