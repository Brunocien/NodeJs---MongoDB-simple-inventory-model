import mongoose from "mongoose";

mongoose.connect("mongodb database link here");

let db = mongoose.connection;

export default db;