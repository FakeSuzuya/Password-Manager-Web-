const express = require('express');
const { authenticateToken } = require('../middleware/authMiddleware');
const { storePassword } = require('../controllers/dashboardController');

const router = express.Router();

router.post('/passwords', authenticateToken, storePassword);

module.exports = router;
