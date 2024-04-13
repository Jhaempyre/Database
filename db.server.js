import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config({
    path:'./.env'
})
console.log(process.env.SECONDARY_CONN_STR)
const connectDB = async (uri, options = {}) => {
    try {
        console.log(uri)
        const connectionInstance = await mongoose.connect(`${uri}/mydatabase`, options);
        console.log(`\n MongoDB connected !! DB host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGODB CONNECTION FAILED", error);
        process.exit(1);
    }
};


export default connectDB