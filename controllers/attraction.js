const Attraction = require('../models/Attraction') // Import the Attraction model

const GetAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find()
    res.status(200).json(attractions)
  } catch (error) {
    console.error(error)
    res
      .status(500)
      .json({ message: 'An error occurred while fetching attractions' })
  }
}

module.exports = { GetAttractions }
