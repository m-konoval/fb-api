const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  name: String,
  type: String,
  description: String,
  place: {
    name: String,
    location: String
  },
  start_date: {
    type: Date,
    default: Date.now
  },
  end_date: Date
});

module.exports = mongoose.model('Event', EventSchema);