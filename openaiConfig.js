require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

module.exports = openai;
