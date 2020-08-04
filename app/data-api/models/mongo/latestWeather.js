const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var latestSchema = new Schema({
  Timestamp: { type: String, unique: true },
  Created: { type: Date, default: Date.now }
});

mongoose.model('LatestWeather', latestSchema, 'LatestWeather');
