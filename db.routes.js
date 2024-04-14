
import { Router } from "express";
import { connectToDatabase } from "./db.controllers.js";

const router = new Router();

router.route("/clientdb").get((req, res) => {
  // Call the connectToDatabase function when the API is hit
  const clientDB = connectToDatabase(process.env.SECONDARY_CONN_STR, {
    // (optional) connection options
  });

  // Now you can perform database operations using clientDB

  console.log("API HIT ❤️❤️")
  // Respond to the API request as needed
  res.send('API hit❤️❤️');
});

export default router;