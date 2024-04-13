import mongoose from "mongoose";
import adminSchema from "./admin.schema.js";

const AdminModel = mongoose.model("Admin", adminSchema);

export default AdminModel;
