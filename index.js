import express from 'express';
import mongoose from 'mongoose';
import connectDB from './db.server.js';
import clientConnection from './db.client.js';
import AdminModel from './admin.models.js';
import PaymentModel from './paymnet.models.js';
import AccountModel from "./accounts.model.js"
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


const clientDB = clientConnection(process.env.SECONDARY_CONN_STR, {
    // (optional) connection options
});

(async function() {
    try {
        const adminData = [
            { username: 'admin1', password: 'admin123', email: 'admin1@example.com' },
            { username: 'admin2', password: 'admin456', email: 'admin2@example.com' }
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

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});