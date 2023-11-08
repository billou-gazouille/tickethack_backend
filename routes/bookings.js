var express = require('express');
var router = express.Router();
const Booking = require('../database/models/bookings');
// const moment = require('moment');
// const mongoose = require('mongoose');

router.post('/', async (req, res) => {
    const trip = req.body.tripId;
    await new Booking({trip}).save();
    const bookings = await Booking.find();
    res.json({bookings});
});

// router.get('/', async (req, res) => {
//     const bookings = await Booking.find();
//     res.json({bookings});
// });



module.exports = router;