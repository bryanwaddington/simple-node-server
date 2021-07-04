const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log(provess.env);
  res.send({ 'process.env': provess.env });
});

const PORT = process.env.PORT;
app.listen(PORT || 3030);
