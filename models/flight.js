var mongoose = require('mongoose')

var flightSchema = new mongoose.Schema({
  locationFrom: String,
  locationTo: String,
  travelDate: String,
  returnDate: String
})

var passengerSchema = new mongoose.Schema({
  name: String,
  gender: String,
  dob: String,
  contactno: Number,
  email: String,
  passportno: String,
  membershipno: Number,
  //Link flight ID to passenger (flight ID foreign key)
  flightID: String
})

var Flight = mongoose.model('Flight', flightSchema)

var Passenger = mongoose.model('Passenger', passengerSchema)

module.exports = {
  'Flight': Flight,
  'Passenger': Passenger
}
