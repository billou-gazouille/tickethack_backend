const mongoose = require('mongoose');

const tripInCartSchema = new mongoose.Schema({
    trip: {type: mongoose.Schema.Types.ObjectId, ref: 'trips'}
});

const TripInCart = mongoose.model('trips_in_cart', tripInCartSchema);

module.exports = TripInCart;