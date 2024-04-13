import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db.server.js';
import clientConnection from './db.client.js';
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

const app = express();

console.log(process.env.PRIMARY_CONN_STR)
console.log(process.env.SECONDARY_CONN_STR)


const serverDB = connectDB(process.env.PRIMARY_CONN_STR, {
    // (optional) connection options
});
let i = 0;
for (i; i < 10; i++) {
    console.log(i);
}


app.get('/api/hit', (req, res) => {
    // Call the connectToDatabase function when the API is hit
    const clientDB = clientConnection(process.env.SECONDARY_CONN_STR, {
      // (optional) connection options
    });
  
    // Now you can perform database operations using clientDB
    // Respond to the API request as needed
    res.send('API hit!');
  });


/*
(async function() {
    try {
        const adminData = [
            { username: 'admin11', password: 'admin123', email: 'admin11@example.com' },
            { username: 'admin12', password: 'admin456', email: 'admin12@example.com' }
        ];
        await AdminModel.create(adminData);
        console.log("Sample admin data added to server DB successfully!");
    } catch (error) {
        console.error("Error adding sample admin data to server DB:", error);
    }
})();

(async function() {
    try {
        const paymentData = [
            { payment_id: 'pay123', amount: 1000 },
            { payment_id: 'pay456', amount: 2000 }
        ];
        await PaymentModel.create(paymentData);
        console.log("Sample payment data added to client DB successfully!");
    } catch (error) {
        console.error("Error adding sample payment data to client DB:", error);
    }
})();

(async function(){
    try {
        const accountData = [
            {account_number:"delhi786", balance:1120245},
            {account_number:"delhi759", balance:1121545}
        ];
        await AccountModel.create(accountData);
        console.log("Sample account data added to client DB successfully!");
    } catch (error) {
        console.error("Error adding sample payment data to client DB:", error);
    }
})();
*/
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