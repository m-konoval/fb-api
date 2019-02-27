const express = require('express'),
    grahqlHTTP = require('express-graphql'),
    cors = require('cors'),
    path = require('path'),
    mongoose = require('mongoose');

const app = express();


// Allow cross-origin
app.use(cors());


// DB connection
const { mongoURI } = require('./config/keys');

mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('DB success'))
    .catch(err => console.log(`DB error: ${err}`));


// START server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`server on port ${port}`));