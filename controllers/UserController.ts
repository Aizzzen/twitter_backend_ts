import express from "express";
import {UserModel} from "../models/UserModel";
import {validationResult} from "express-validator";
import {generateMD5} from "../utils/generateHash";

class UserController {
    async index(_: any, res: express.Response): Promise<void> {
        try {
            //                            найди всех и верни
            const users = await UserModel.find({}).exec()

            res.json({
                status: "success",
                data: users
            })
        } catch (error) {
            res.json({
                status: "error",
                message: JSON.stringify(error)
            })
        }
    }

    // async create(): Promise<void> {
    async create(req: express.Request, res: express.Response): Promise<void> {
        try {
            const errors = validationResult(req)
            if(!errors.isEmpty()) {
                res.status(400).json({status: "error", errors: errors.array()})
                return
            }

            const data = {
                email: req.body.email,
                fullName: req.body.fullName,
                userName: req.body.userName,
                password: req.body.password,
                confirm_hash: generateMD5(process.env.SECRET_KEY || Math.random().toString())
            }

            const user = await UserModel.create(data)

            res.json({
                status: "success",
                data: user
            })
        } catch (error) {
            res.json({
                status: "error",
                message: JSON.stringify(error)
            })
        }
    }
}

export const UserCtrl = new UserController()
