
const express = require('express');
const router = express.Router();
const reservationController = require('../controllers/reservation-controller');

// Routes for reservation management
router.post('/reservations', reservationController.createReservation);
router.get('/reservations', reservationController.getAllReservations);
router.get('/reservations/:id', reservationController.getReservationById);
router.put('/reservations/:id', reservationController.updateReservationById);
router.delete('/reservations/:id', reservationController.deleteReservationById);

module.exports = router;
