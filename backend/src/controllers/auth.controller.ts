import connection from "../database";
import jwt from "jsonwebtoken";
require('dotenv').config();

import { User } from "../models/user";
import * as passwordEncryptor from "../utils/passwordEncryptor"

export function signIn(req:any, res:any) {
    return res.send('sign in!');
}

export const signUp = async(req:any, res:any) => {
    const newUser:User = req.body;
    newUser.password = await passwordEncryptor.encryptPassword(req.body.password);

    return connection.query("INSERT INTO users SET ?", [newUser], function (error:any, results:any, fields:any) {
        if (error) throw error;
        
        if(process.env.API_KEY) {
            const token = jwt.sign({id: results.id}, process.env.API_KEY);

            res.status(201).json({token});
        }
    });
}