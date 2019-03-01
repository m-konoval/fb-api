const express = require('express'),
    grahqlHTTP = require('express-graphql'),
    cors = require('cors'),
    path = require('path'),
    mongoose = require('mongoose'),
    fs = require('fs'),
    https = require('https'),
    bodyParser = require('body-parser');
const app = express();

// routes
const auth = require('./routes/auth');


// SECURITY certs

const securityKey = fs.readFileSync(__dirname + '/security/selfsigned.key', 'utf8'),
    securityCert = fs.readFileSync(__dirname + '/security/selfsigned.crt', 'utf8');



// Allow cross-origin
app.use(cors());
app.use(bodyParser.json());


// DB connection
const { mongoURI } = require('./config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log('DB success'))
    .catch(err => console.log(`DB error: ${err}`));


// ROUTES
app.use('/auth', auth);


// Serve static assets if in production
app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
});


// START server
const port = process.env.PORT || 8443;
const httpsServer = https.createServer(
    {
        key: securityKey,
        cert: securityCert
    }, app);

httpsServer.listen(port, () => console.log(`server on port ${port}`));