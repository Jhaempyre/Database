import mongoose from "mongoose";
import adminSchema from "./admin.schema.js";

console.log("rom")
const AdminModel = mongoose.model("Admin", adminSchema);

export default AdminModel;
