import app from "./app.js";
import dotenv from "dotenv";

dotenv.config();

import {config} from "./src/config.js";

async function main() {
    const port = config.server.PORT;
    app.listen(port)
    console.log("Server on port: " + config.server.PORT)
};

main();