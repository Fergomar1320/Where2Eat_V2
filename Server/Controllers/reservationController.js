const Reservation = require('../models/reservation');
const User = require('../models/user');
const ReservationCtrl = {};

ReservationCtrl.getAllReservations = async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

ReservationCtrl.getReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      res.json(reservation);
    } else {
      res.status(404).json({ message: 'Reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

ReservationCtrl.createReservation = async (req, res) => {
    try {
      const { username, restaurant_id, starting_time } = req.body;
      const user = await User.findOne({ username }); // Find user by username
      const reservation = await Reservation.create({ user_id: user._id, restaurant_id, starting_time });
      res.json(reservation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
};
  

ReservationCtrl.updateReservationById = async (req, res) => {
  try {
    const { user_id, restaurant_id, starting_time } = req.body;
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      reservation.user_id = user_id;
      reservation.restaurant_id = restaurant_id;
      reservation.starting_time = starting_time;
      await reservation.save();
      res.json(reservation);
    } else {
      res.status(404).json({ message: 'Reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

ReservationCtrl.deleteReservationById = async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (reservation) {
      await reservation.destroy();
      res.json({ message: 'Reservation deleted successfully' });
    } else {
      res.status(404).json({ message: 'Reservation not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

ReservationCtrl.getAllReservationsByUser = async (req, res) => {
  try {
    const reservations = await Reservation.findAll({
      where: {
        user_id: req.params.user_id
      }
    });
    res.json(reservations);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = ReservationCtrl;
