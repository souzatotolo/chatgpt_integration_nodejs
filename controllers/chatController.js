const chatModel = require('../models/chatModel');

exports.getChatResponse = async (req, res) => {
  const input = req.query.input;

  if (!input) {
    return res.status(400).json({ error: 'Input is required' });
  }

  try {
    const response = await chatModel.generateResponse(input);
    return res.json({ response });
  } catch (error) {
    console.error('Error generating response:', error);
    return res.status(500).json({ error: 'Failed to generate response' });
  }
};
