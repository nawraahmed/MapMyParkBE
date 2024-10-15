const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AttractionSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String, // URL of the image for the attraction
    required: false
  },
  age: {
    type: number,
    required: true
  },
  size: {
    type: number,
    required: true
  },
  indoor: {
    type: Boolean,
    required: true
  }
})

module.exports = mongoose.model('Attraction', AttractionSchema)
