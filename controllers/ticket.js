const Ticket = require('../models/Ticket')

// Create a ticket for the logged-in user
const createTicket = async (req, res) => {
  try {
    const { holderName, ticketType, issueDate } = req.body
    const userId = req.user.id // Get logged-in user's ID

    const newTicket = new Ticket({
      holderName,
      ticketType,
      issueDate: issueDate || undefined,
      user: userId // Associate the ticket with the logged-in user
    })

    const savedTicket = await newTicket.save()
    res.status(201).json(savedTicket)
  } catch (error) {
    console.error('Error creating ticket:', error)
    res.status(500).json({ message: 'Server error while creating ticket.' })
  }
}

// Get tickets only for the logged-in user
const getUserTickets = async (req, res) => {
  try {
    const userId = req.user.id
    const tickets = await Ticket.find({ user: userId })
    if (!tickets) {
      return res
        .status(404)
        .json({ message: 'No tickets found for this user.' })
    }
    res.status(200).json(tickets)
  } catch (error) {
    console.error('Error fetching tickets:', error)
    res.status(500).json({ message: 'Server error while fetching tickets.' })
  }
}

// Delete a ticket
const deleteTicket = async (req, res) => {
  try {
    const { id } = req.params
    const userId = req.user.id
    const ticket = await Ticket.findById(id)

    if (!ticket || ticket.user.toString() !== userId) {
      return res
        .status(404)
        .json({ message: 'Ticket not found or not authorized.' })
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
  getUserTickets,
  deleteTicket
}
