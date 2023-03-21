const { model, Schema } = require('mongoose');

const CountryInfoSchema = new Schema({
  country: String,
  year: String,
  area: Number,
  totalPopulation: Number,
});

module.exports = model('CountryInfo', CountryInfoSchema);
