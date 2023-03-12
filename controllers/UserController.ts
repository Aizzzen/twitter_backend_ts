import express from "express";
import {UserModel} from "../models/UserModel";

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
                status: "success",
                message: JSON.stringify(error)
            })
        }
    }

    async create(): Promise<void> {
    // async create(req: express.Request, res: express.Response): Promise<void> {
        try {

        } catch (error) {

        }
    }
}

export const UserCtrl = new UserController()
