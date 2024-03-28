// room-controller.js

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.createRoom = async (req, res, next) => {
  const { role, roomname, type, status, price, userId } = req.body;
  try {
    const room = await prisma.room.create({
      data: {
        role,
        roomname,
        type,
        status,
        price,
        userId,
      },
    });
    res.status(201).json({ room });
  } catch (error) {
    next(error);
  }
};

exports.getAllRooms = async (req, res, next) => {
  try {
    const rooms = await prisma.room.findMany();
    res.status(200).json({ rooms });
  } catch (error) {
    next(error);
  }
};

exports.getRoomById = async (req, res, next) => {
  const roomId = req.params.id;
  try {
    const room = await prisma.room.findUnique({
      where: { id: parseInt(roomId) },
    });
    if (!room) {
      return res.status(404).json({ message: "Room not found" });
    }
    res.status(200).json({ room });
  } catch (error) {
    next(error);
  }
};

exports.updateRoomById = async (req, res, next) => {
  const roomId = req.params.id;
  const { role, roomname, type, status, price, userId } = req.body;
  try {
    const updatedRoom = await prisma.room.update({
      where: {
        id: parseInt(roomId),
      },
      data: {
        role,
        roomname,
        type,
        status,
        price,
        userId,
      },
    });
    res.status(200).json({ room: updatedRoom });
  } catch (error) {
    next(error);
  }
};

exports.deleteRoomById = async (req, res, next) => {
  const roomId = req.params.id;
  try {
    await prisma.room.delete({
      where: {
        id: parseInt(roomId),
      },
    });
    res.status(204).end();
  } catch (error) {
    next(error);
  }
};
