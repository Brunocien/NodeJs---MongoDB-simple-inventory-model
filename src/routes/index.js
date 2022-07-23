import express from "express";
import items from "./itemRoutes.js";
import users from "./userRoutes.js"

const routes = (app) => {
    app.route("/").get((req,res) => {
        res.status(200).send({title: "Welcome"})
    })

    app.use(
        express.json(),
        items,
        users

    )
}

export default routes;