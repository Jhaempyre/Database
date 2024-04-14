import express from 'express';
import connectDB from './db.server.js';
import dotenv from "dotenv";
import clientConnection from './db.client.js';
import { app } from './app.js';
dotenv.config({
    path:'./.env'
})


console.log(process.env.PRIMARY_CONN_STR)
console.log(process.env.SECONDARY_CONN_STR)


const serverDB = connectDB(process.env.PRIMARY_CONN_STR, {
    // (optional) connection options
});

app.get('/api/hit', (req, res) => {
    // Call the connectToDatabase function when the API is hit
    const clientDB = clientConnection(process.env.SECONDARY_CONN_STR, {
      // (optional) connection options
    });
  
    // Now you can perform database operations using clientDB
    // Respond to the API request as needed
    res.send('API hit!');
  });

  let serverResponse ;

// Define the API endpoint to check if the server is running
app.get('/api/check-server', (req, res) => {
    console.log('API endpoint /api/check-server has been hit.');
    serverResponse = { message: 'Server is running', timestamp: Date.now() };
    console.log("1");
    res.status(200).json(serverResponse);
});

if (serverResponse && serverResponse.message === 'Server is running') {
    console.log("5");
} else {
    console.log("6");
}




const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});
