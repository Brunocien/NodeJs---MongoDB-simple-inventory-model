import express from "express";
import UserController from "../controllers/userController.js";

const router = express.Router();

router
    .get("/users", UserController.getAllUsers)
    .put("/users/:id", UserController.updateUserById)
    .post("/users", UserController.addUser)
    .delete("/users/:id", UserController.deleteUser)

export default router;