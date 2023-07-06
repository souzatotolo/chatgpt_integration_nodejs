const express = require('express');
const app = express();
const port = process.env.PORT || 3333;
require('dotenv').config();

const chatRoutes = require('./routes/chatRoutes');
app.use('/chat', chatRoutes);

app.listen(port, () => {
  console.log(`${process.env.API_NAME} running on port: ${port}`);
});
