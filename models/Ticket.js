const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TicketSchema = new Schema({
  holderName: {
    type: String,
    required: true
  },
  ticketType: {
    type: String, // e.g., 'Adult', 'Child'
    required: true
  },
  issueDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Ticket', TicketSchema)
