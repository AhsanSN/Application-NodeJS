const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
//for css
app.use(express.static('public'));
//for html
app.set('view engine', 'ejs')



//displaying html requested page
app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
})

//displaying form response
app.post('/', function (req, res) {
  res.render('index');
  console.log(req.body.city);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})