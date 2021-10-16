const mongoose = require('mongoose');

require('dotenv').config();

mongoose.connect(process.env.MONGO_URL_CONNECT, () => {console.log("Connected to MongoDB");});