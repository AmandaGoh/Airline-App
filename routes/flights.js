var express = require('express')
var router = express.Router()

var Flight = require('../models/flight')

router.get('/', function (req , res) {
  res.render('index')
})

router.post('/booking', function (req , res) {
  var post_locationFrom = req.body.flight.locationFrom
  var post_locationTo = req.body.flight.locationTo
  var post_travelDate = req.body.flight.travelDate
  var post_returnDate = req.body.flight.returnDate

  var newFlight = new Flight.Flight({
    locationFrom: post_locationFrom,
    locationTo: post_locationTo,
    travelDate: post_travelDate,
    returnDate: post_returnDate
  })
  newFlight.save(function(err){
    if (err) throw new Error (err)
  })

  res.render('passengers')
})





module.exports = router
