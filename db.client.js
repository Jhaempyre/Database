import mongoose from "mongoose";
// Import schemas
import paymentSchema from "./payment.schema.js";
import accountSchema from "./accounts.schema.js";

const clientConnection = (uri, options = {}, x) => {
    let PaymentModel;
    let AccountModel;

    if (x == 2) {
        const url = uri + "/serverEnd1";
        const db = mongoose.createConnection(url, options);

        // Initialize models
         PaymentModel = db.model("Payment", paymentSchema);
         AccountModel = db.model("Account", accountSchema);

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

        // Export models and connection object
        return { db, PaymentModel, AccountModel };
    } else {
        console.log("nahi chala naa heheheh");
        // Handle the case where x is not equal to 2
        throw new Error('Invalid value of x');
    }
};

export default clientConnection;

