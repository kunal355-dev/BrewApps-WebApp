var express = require('express')
const path = require('path')
var app = express()

const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'client/build')));

app.get('/title', function (req, res) {
  res.send('Live Spaces')
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/public/index.html'));
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});

module.exports = app;