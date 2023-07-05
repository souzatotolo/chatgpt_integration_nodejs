const { read } = require('fs');
const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();
const readline = require('readline');

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.API_KEY,
  })
);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on('line', async (input) => {
  const res = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello chatGPT' }],
  });
  console.log(res.data.choices[0].message.content);
  userInterface.prompt()
});

openai
  .createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Hello chatGPT' }],
  })
  .then((res) => {
    console.log(res.data.choices[0].message.content);
  });
