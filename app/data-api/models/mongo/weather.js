const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var weatherSchema = new Schema({
  Timestamp: { type: String, unique: true },
  FeatureCollection: mongoose.Schema.Types.Mixed
});

mongoose.model('Weather', weatherSchema, 'Weather');
