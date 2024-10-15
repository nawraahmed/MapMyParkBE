// controllers/ticketController.js
const Ticket = require('../models/Ticket')

// controllers/ticketController.js
const createTicket = async (req, res) => {
  try {
    const { holderName, ticketType, price, issueDate, isUsed } = req.body

    // Validate required fields
    if (!holderName || !ticketType || !price) {
      return res
        .status(400)
        .json({ message: 'Please provide all required fields.' })
    }

    const newTicket = new Ticket({
      holderName,
      ticketType,
      price,
      issueDate: issueDate || undefined, // Use default if not provided
      isUsed: isUsed || false
    })

    const savedTicket = await newTicket.save()
    res.status(201).json(savedTicket)
  } catch (error) {
    console.error('Error creating ticket:', error)
    res.status(500).json({
      message: 'Server error while creating ticket.',
      error: error.message
    })
  }
}
// Get all tickets or a single ticket by ID
const getTickets = async (req, res) => {
  try {
    const { id } = req.params

    if (id) {
      // Get a single ticket by ID
      const ticket = await Ticket.findById(id)
      if (!ticket) {
        return res.status(404).json({ message: 'Ticket not found.' })
      }
      return res.status(200).json(ticket)
    } else {
      // Get all tickets
      const tickets = await Ticket.find()
      res.status(200).json(tickets)
    }
  } catch (error) {
    console.error('Error fetching tickets:', error)
    res.status(500).json({ message: 'Server error while fetching tickets.' })
  }
}

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params

    const ticket = await Ticket.findById(id)
    if (!ticket) {
      return res.status(404).json({ message: 'Ticket not found.' })
    }

    await Ticket.findByIdAndDelete(id)
    res.status(200).json({ message: 'Ticket deleted successfully.' })
  } catch (error) {
    console.error('Error deleting ticket:', error)
    res.status(500).json({ message: 'Server error while deleting ticket.' })
  }
}

module.exports = {
  createTicket,
  getTickets,
  deleteTicket
}
