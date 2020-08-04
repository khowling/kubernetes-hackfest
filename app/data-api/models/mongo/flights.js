const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var flightSchema = new Schema({
  Timestamp: { type: String, unique: true },
  FeatureCollection: mongoose.Schema.Types.Mixed
});

mongoose.model('Flights', flightSchema, 'Flights');
