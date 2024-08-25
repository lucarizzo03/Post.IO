
const express = require('express');
const path = require('path');
const { generateMeta, generateImage } = require('./openaiConfig/config');


// setup for app 
const app = express();

// to serve public files 
app.use(express.static(path.join(__dirname, 'public')));

// middleware 
app.use(express.json());



// route 
app.post('/openai/genMeta', generateMeta);
app.post('/openai/genImage', generateImage);



// Serve index.html for the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


// start server
app.listen(3000, () => console.log('listening for requests on 3000'));



// http://localhost:3000 ----- web server ----> To Run:
//                                                 1. node app - in terminal 
//                                                 2. then copy paste link in browser - should be good to go 




