import clientConnection from "./db.client.js";
import accountSchema from "./accounts.schema.js";

const db = clientConnection(process.env.SECONDARY_CONN_STR,{});

const AccountModel = db.model("Account", accountSchema);

export default AccountModel;
