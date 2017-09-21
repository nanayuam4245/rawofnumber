const functions = require('firebase-functions');
const express = require('express')

const app = express()
app.get('/hello', (request, response) => {
    response.send("Hello World!!!")
})

 exports.app = functions.https.onRequest(app);
