var express = require('express')
var router = express.Router()

var Flight = require('../models/flight')

router.get('/', function (req , res) {
  res.render('passengers')
})

router.post('/details', function (req, res) {
  var post_name = req.body.passenger.name
  var post_gender = req.body.passenger.gender
  var post_dob = req.body.passenger.dob
  var post_contactno = req.body.passenger.contactno
  var post_email = req.body.passenger.email
  var post_passportno = req.body.passenger.passportno
  var post_membershipno = req.body.passenger.membershipno

  var newPassenger = new Flight.Passenger({
    name: post_name,
    gender: post_gender,
    dob: post_dob,
    contactno: post_contactno,
    email: post_email,
    passportno: post_passportno,
    membershipno: post_membershipno,
  })

  newPassenger.save(function(err){
    if (err) throw new Error (err)
  })

  res.send(req.body)
})


module.exports = router
