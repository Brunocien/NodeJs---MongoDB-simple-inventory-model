import mongoose from "mongoose";
import users from "../models/User.js";

class UserController{
    static getAllUsers = (req,res) => {
        users.find((err, users) => {
            res.status(200).json(users)
        })
        
    }
    static updateUserById = (req,res) => {
        let id = req.params.id

        users.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            !err ? res.status(200).send({message: "User updated successfuly"}) : res.status(500).send(` ${err.message} - Could not update user`);
        })
    }
    static addUser = (req,res) => {
        let user = new users(req.body)

        user.save((err) => {
            !err ? res.status(201).send(user.toJSON()) : res.status(500)
            .send(` ${err.message} - Couldn't add`)
        })
    }
    static deleteUser = (req,res) => {
        let id = req.params.id;

        users.findByIdAndDelete(id, (err) => {
            !err ? res.status(200).send({message: "user deleted"}) : res.status(500).send(`${err.message} - Couldn't delete user`)
        })
    }

}

export default UserController;