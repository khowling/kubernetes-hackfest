const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var quakeSchema = new Schema({
  Timestamp: { type: String, unique: true },
  FeatureCollection: mongoose.Schema.Types.Mixed
});

mongoose.model('Quakes', quakeSchema, 'Quakes');
