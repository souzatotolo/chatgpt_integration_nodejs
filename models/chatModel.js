const openai = require('../openaiConfig');

exports.generateResponse = async (input) => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: input }],
  }).then((res) => {
    console.log(res.data.choices[0].message.content);
  });
  
  return response.data.choices[0].message.content;
};
