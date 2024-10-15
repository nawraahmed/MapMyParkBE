// routes/ticketRoutes.js
const express = require('express')
const router = express.Router()
const ticketController = require('../controllers/ticket')

// @route   POST /api/tickets
// @desc    Create a new ticket
// @access  Public (Modify as needed for authentication)
router.post('/', ticketController.createTicket)

// @route   GET /api/tickets
// @desc    Get all tickets
// @access  Public
router.get('/', ticketController.getTickets)

// @route   GET /api/tickets/:id
// @desc    Get a single ticket by ID
// @access  Public
router.get('/:id', ticketController.getTickets)

// @route   DELETE /api/tickets/:id
// @desc    Delete a ticket by ID
// @access  Public (Modify as needed for authentication)
router.delete('/:id', ticketController.deleteTicket)

module.exports = router
