var express = require('express');
var router = express.Router();
const Trip = require('../database/models/trips');
const moment = require('moment');

router.get('/', async (req, res) => {
  //res.json({result: true, message: 'Welcome!'});
  const allTrips = await Trip.find();
  res.json({allTrips});
  //const firstTrip = (await Trip.find())[0];
  //res.json({firstTrip});
});

router.get('/:departure/:arrival/:date', async (req, res) => {
  const { departure, arrival, date } = req.params;
  console.log(moment(new Date(date)).add(1, 'days'));
  const trips = await Trip.find({
      departure : {$regex: new RegExp(departure, "i")},
      arrival : {$regex: new RegExp(arrival, "i")},
      date : {
        "$gt": new Date(date),
        "$lt": moment(new Date(date)).add(1, 'days')}
     });
  res.json({trips});
});

module.exports = router;
