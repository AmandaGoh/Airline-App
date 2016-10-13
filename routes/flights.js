var express = require('express')
var router = express.Router()

router.get('/', function (req , res) {
  res.render('flights')
})

router.post('/flights', function (req , res) {
  var post_locationFrom = req.body.locationFrom
  var post_locationTo = req.body.locationTo
  // var testEmail = req.body.email

  res.send(req.body)
})



module.exports = router
