var express = require('express')
var bodyParser = require('body-parser')

var app = express()
var port = 3000

var flights_route = require('./routes/flights')
var passengers_route = require('./routes/passengers')

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({
  extended: true
}))
app.use('/', flights_route)

app.use('/passengers', passengers_route)



app.listen(port)
console.log('Server running at http://localhost: ' + port + '/')
