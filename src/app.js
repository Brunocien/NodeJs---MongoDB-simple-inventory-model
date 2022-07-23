import express from "express";
import routes from "./routes/index.js";
import db from "./config/dbConfig.js";

db.on("error", console.log.bind(console, "Could not connect to database"));
db.once("open", () => {
    console.log("Connection stablished successfuly")
})

const app = express();

app.use(express.json());

routes(app);

export default app;