const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.get('/chat', chatController.getChatResponse);

module.exports = router;
