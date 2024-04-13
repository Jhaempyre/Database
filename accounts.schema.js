import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    account_number: {
        type: String,
        required: true
    },
    balance: {
        type: Number,
        default: 0
    },
    // Add more fields as necessary
});

export default accountSchema;
