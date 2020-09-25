'use strict';

const express = require('express');
const path = require('path');

// Constanti
const PORT = process.env.PORT || 8080;
const IMAGE_PORT = process.env.IMAGE_PORT || 8080;
const HOST = '0.0.0.0';
const IMAGE_FILE = 'bid.png';

// App
const app = express();
const dir = path.join(__dirname + "/public");

// apri
app.use(express.static(dir));

// redirect root url to open the image
app.get('/', (req, res) => {

	// Questo rindirizzamento viene risolto a run time direttamente dal broswer ed e' opaco dal mapping delle porte di docker
	res.redirect(`http://${req.hostname}:${IMAGE_PORT}/${IMAGE_FILE}`);
});

// start up the server
app.listen(PORT, HOST);

// log
console.log('---------------------------------------')
console.log(`Welcome to BID server,\n Please visit:\thttp://${HOST}:${PORT}`);