import express from "express";
import dotenv from "dotenv";
import bodyParser from 'body-parser';

const app = new express()
dotenv.config({
    path:'./.env'
})


app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
import userRouter from './operation.routes.js'
app.use("/api/v1/users", userRouter)

import dbrouter from './db.routes.js'
app.use("/api/v2",dbrouter)


const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});

export {app}
