const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttractionSchema = new Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  age: { type: Number, required: true },
  size: { type: Number, required: true },
  indoor: { type: Boolean, required: true },
  top: { type: String, required: true },
  left: { type: String, required: true }
})

module.exports = mongoose.model('Attraction', AttractionSchema)
