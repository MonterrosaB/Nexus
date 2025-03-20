import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()

import {config} from "./src/config.js"

mongoose.connect(config.db.URI);

const connection = mongoose.connection;

connection.once("open", () => {
    console.log("DB is Connected");   
})

connection.once("disconnected", () => {
    console.log("DB is Disconnected");
})

connection.once("error", (error) => {
    console.log("Error Found " + error);
})