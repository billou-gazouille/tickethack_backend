var express = require('express');
var router = express.Router();
const TripInCart = require('../database/models/tripsInCart');
// const moment = require('moment');
const mongoose = require('mongoose');

router.post('/addTrip', async (req, res) => {
    const trip = req.body.tripId;
    //console.log('trip----', trip);
    //const trip = mongoose.Types.ObjectId(req.body.tripId);
    await new TripInCart({trip}).save();
    const cart = await TripInCart.find();
    res.json({cart});
});


router.get('/trips', async (req, res) => {
    const cart = await TripInCart.find().populate("trip");
    res.json({cart});
});


router.delete('/', async (req, res) => {
    const tripToDelete = req.body.tripId;
    await TripInCart.deleteOne({trip: tripToDelete});
    const cart = await TripInCart.find().populate("trip");
    res.json({updatedCart: cart});
});


module.exports = router;