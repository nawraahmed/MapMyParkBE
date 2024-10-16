const express = require('express')
const {
  createTicket,
  getUserTickets,
  deleteTicket
} = require('../controllers/ticket')
const { stripToken, verifyToken } = require('../middleware/index')

const router = express.Router()

// Routes protected by token verification
router.post('/', stripToken, verifyToken, createTicket) // Create a ticket
router.get('/', stripToken, verifyToken, getUserTickets) // Get user-specific tickets
router.delete('/:id', stripToken, verifyToken, deleteTicket) // Delete a ticket

module.exports = router
