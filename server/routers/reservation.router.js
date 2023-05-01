/*
Reservation routers.
*/

const express = require('express');
const router = express.Router();
const ReservationCtrl = require('../Controllers/reservationController');

router.get('/', ReservationCtrl.getAllReservations);
router.get('/:id', ReservationCtrl.getReservationById);
router.post('/', ReservationCtrl.createReservation);
router.put('/:id', ReservationCtrl.updateReservationById);
router.delete('/:id', ReservationCtrl.deleteReservationById);
router.get('/user/:username', ReservationCtrl.getAllReservationsByUsername);

module.exports = router;
