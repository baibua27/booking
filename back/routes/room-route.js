// room-router.js

const express = require('express');
const router = express.Router();
const roomController = require('../controllers/room-controller');

// Routes for room management
router.post('/rooms', roomController.createRoom);
router.get('/rooms', roomController.getAllRooms);
router.get('/rooms/:id', roomController.getRoomById);
router.put('/rooms/:id', roomController.updateRoomById);
router.delete('/rooms/:id', roomController.deleteRoomById);

module.exports = router;
