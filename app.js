import express from "express";
import dotenv from "dotenv";

const app = new express()
dotenv.config({
    path:'./.env'
})

// Routes
import userRouter from './operation.routes.js'
app.use("/api/v1/users", userRouter)


import dbRouter from './db.routes.js';
app.use("/api/v1/db", dbRouter);

const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.info(`Listening on port ${port}...`);
}).on("error", (err) => {
    console.error(err.message);
});

export {app}
