import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    payment_id: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    payment_date: {
        type: Date,
        default: Date.now
    }
    // Add more fields as necessary
});

export default paymentSchema;
