
import { Router } from "express";
//import { connectToDatabase } from "./db.controllers.js";
import { dl} from "./db.client.js";
const router = new Router();

router.route("/clientdb").post((req, res) => {
  // Call the connectToDatabase function when the API is hit
  const {x} = req.body
  console.log(x);
  console.log(req.body)
  dl(process.env.SECONDARY_CONN_STR, {
    // (optional) connection options
  },x);

  // Now you can perform database operations using clientDB

  console.log("API HIT ❤️❤️")
  // Respond to the API request as needed
  res.send('API hit❤️❤️');
});

export default router;