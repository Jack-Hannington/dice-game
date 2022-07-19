const express = require('express');
const ejs = require('ejs');
const app = express();




// set the relevant view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.render('index');
})

app.listen(process.env.PORT || 3000, () => {
    console.log('server running')
  })
  