var app = require('express')();
app.listen(8080);

app.get('/', (req, res) => {
  res.send('hello');
});
