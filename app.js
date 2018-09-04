var express = require('express');
var app = express();
app.set('view engine', 'ejs');

var Users = {

  'Xander': {
    age: 19,
    occupation: 'Developer',
    hobby: 'Driving'
  },

  'Adrian': {
    age: 34,
    occupation: 'Senior Solutions Architect',
    hobby: 'Running'
  }
};

app.use(express.static(__dirname + '/app'));

app.get('/', function (req, res) {
  res.send('Main page is up and running!');
});

app.get('/Dashboard', function (req, res) {
    res.render('Dashboard');
});

app.get('/Team', function (req, res) {
    res.render('Team');
});

app.get('/user', function (req, res) {
    var check = Users[req.query.name];
    if (check) {
        res.render('User', { name: req.query.name, info: check });
    } else {
        res.send('User does not exist...');
    }
});


app.listen(3000, function () {
  console.log('server started on port 3000');
});