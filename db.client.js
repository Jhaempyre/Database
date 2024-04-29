import mongoose from "mongoose";

// Import schemas
import paymentSchema from "./payment.schema.js";
import accountSchema from "./accounts.schema.js";

const dl = function clientConnection(uri, options = {}, x){
    let db;

    if (x === 2) {
        const url = uri + "/serverEnd1";
        db = mongoose.createConnection(url, options);

        // Event handling
        db.once('open', () => console.info("MongoDB secondary connection opened!"));
        db.on('connected', () => console.info(`MongoDB secondary connection succeeded!`));
        db.on('error', (err) => {
            console.error(`MongoDB secondary connection failed, ` + err);
            db.close();
        });
        db.on('disconnected', () => console.info(`MongoDB secondary connection disconnected!`));

        // Graceful exit
        process.on('SIGINT', () => {
            db.close().then(() => {
                console.info(`Mongoose secondary connection disconnected through app termination!`);
                process.exit(0);
            });
        });

        // Export db object
        return db;
    } else {
        console.log("Invalid value of x");
        // Handle the case where x is not equal to 2
        return null;
    }
};


// Function to create models using the provided db object

    // Initialize models
    const PaymentModel = dl.model("Payment", paymentSchema);
    const AccountModel = dl.model("Account", accountSchema);


export { dl, PaymentModel,AccountModel };
