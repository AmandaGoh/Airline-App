var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')

var app = express()
var port = 3000

mongoose.connect('mongodb://localhost/blog')
mongoose.Promise = global.Promise

var Flight = require('./models/flight')

var flights_route = require('./routes/flights')
var passengers_route = require('./routes/passengers')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static(__dirname + '/static'))

app.use('/', flights_route)
app.use('/booking', passengers_route)



app.listen(port)
console.log('Server running at http://localhost: ' + port + '/')
