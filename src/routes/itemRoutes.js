import ItemController from "../controllers/itemController.js"
import express from "express"

let router = express.Router();

router
    .get("/items", ItemController.getAllItems)
    .put("/items/:id", ItemController.updateItemById)
    .post("/items", ItemController.addItem)
    .delete("/items/:id", ItemController.deleteItem)

export default router;