const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(process.env);
  res.send({ 'process.env': process.env });
});

const PORT = process.env.PORT;
app.listen(PORT || 3030);
