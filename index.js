const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const user = require('./data/user.json');

app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(express.static('public'))
app.set("view engine", "ejs");

app.get('/chapter-3', (req, res) => {
  res.render('chapter3')
})

app.get('/chapter-4', (req, res) => {
  res.render('chapter4')
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.get('/user', (req, res) => {
  res.status(200).json(user)
})

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  const isUserExist = user.filter((item) => item.username === username);
  let isPasswordCorrect = false;
  if (isUserExist.length > 0) {
    if (password === isUserExist[0].password) {
      isPasswordCorrect = true;
    }
  }

  if (isPasswordCorrect) {
    res.status(200).send("anda berhasil login");
  }

  // res.status(401).send("username atau password anda salah");
  res.render('alert')
})

app.listen(port, () => console.log('apps berjalan di port 3000'))
