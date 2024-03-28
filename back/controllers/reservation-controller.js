// Reservation-controller.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createReservation = async (req, res, next) => {
    const { role, amount, roomId, checkInDate, checkOutDate, status, userId } = req.body;
    try {
      const newReservation = await prisma.reservation.create({
        data: {
          role,
          amount,
          roomID: roomId,
          checkInDate,
          checkOutDate,
          status,
          userId,
        },
      });
      res.status(200).json({ reservation: newReservation });
    } catch (error) {
      next(error);
    }
  };
  
  
exports.getAllReservations = async (req, res, next) => {
  try {
    const reservations = await prisma.reservation.findMany();
    res.status(200).json({ reservations });
  } catch (error) {
    next(error);
  }
};

exports.getReservationById = async (req, res, next) => {
  const reservationId = req.params.id;
  try {
    const reservation = await prisma.reservation.findUnique({
      where: { id: parseInt(reservationId) },
    });
    if (!reservation) {
      return res.status(404).json({ message: "Reservation not found" });
    }
    res.status(200).json({ reservation });
  } catch (error) {
    next(error);
  }
};

exports.updateReservationById = async (req, res, next) => {
  const reservationId = req.params.id;
  const { role, amount, roomId, checkInDate, checkOutDate, status, userId } = req.body;
  try {
    const updatedReservation = await prisma.reservation.update({
      where: {
        id: parseInt(reservationId),
      },
      data: {
        role,
        amount,
        roomID: roomId,
        checkInDate,
        checkOutDate,
        status,
        userId,
      },
    });
    res.status(200).json({ reservation: updatedReservation });
  } catch (error) {
    next(error);
  }
};

exports.deleteReservationById = async (req, res, next) => {
  const reservationId = req.params.id;
  try {
    await prisma.reservation.delete({
      where: {
        id: parseInt(reservationId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
