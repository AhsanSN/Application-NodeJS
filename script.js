const express = require('express')
const app = express()
//for css
app.use(express.static('public'));
//for html
app.set('view engine', 'ejs')




app.get('/', function (req, res) {
  //res.send('Hello World!');
  res.render('index');
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})