const express = require('express');
const bodyParser = require('body-parser');
const mustacheExpress = require('mustache-express');
const mainRouter = require('./routes/routes');

const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(bodyParser.urlencoded({
  extended: true
}));

app.use('/public', express.static('public'));

app.use('/', mainRouter);

app.listen(3000, function(req, res) {
  console.log("API open...");
})
