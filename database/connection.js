const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://admin:Hsutx8F2BMxWhaFC@myfirstdatabse.tjgoc32.mongodb.net/tickethack';

mongoose.connect(connectionString, {connectTimeoutMS: 5000})
    .then(() => console.log('connected to database'))
    .catch(() => console.log('fuck'));