var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var tripsRouter = require('./routes/trips');
var cartRouter = require('./routes/cart');
var bookingsRouter = require('./routes/bookings');

require('./database/connection');

const cors = require('cors');

var app = express();

app.use(cors());

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/trips', tripsRouter);
app.use('/cart', cartRouter);
app.use('/bookings', bookingsRouter);

module.exports = app;
