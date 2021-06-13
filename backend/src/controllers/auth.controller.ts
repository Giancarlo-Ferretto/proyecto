import connection from "../database";
import jwt from "jsonwebtoken";
require('dotenv').config();

import { User } from "../models/user";
import * as passwordEncryptor from "../utils/passwordEncryptor"

export const signIn = async (req:any, res:any) => {
    try {
        connection.query("SELECT id, email, password FROM users WHERE email = ? LIMIT 1", [req.body.email], async (error:any, results:any) => {
            if (error) throw error;
            if (!results.length) return res.status(400).json({message: "¡El correo que has introducido no está registrado!"});
            const matchPassword = await passwordEncryptor.comparePassword(req.body.password, results[0].password);
            if (matchPassword == false) return res.status(401).json({token: null, message:"¡La contraseña que has introducido es incorrecta!"});
            const selectedUser:User = results[0];
            if (process.env.API_KEY) {
                const token = jwt.sign({id: selectedUser.id}, process.env.API_KEY, {
                    expiresIn: 86400,
                });
                res.json({token});
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}

export const signUp = async (req:any, res:any) => {
    try {
        const newUser:User = {name:req.body.name, lastname:req.body.lastname, password:req.body.password, email:req.body.email, rut:req.body.rut, address:req.body.address, region:req.body.region, city:req.body.city, isAdmin:0};
        newUser.password = await passwordEncryptor.encryptPassword(req.body.password);

        return connection.query("INSERT INTO users SET ?", [newUser], function (error:any, results:any) {
            if (error) throw error;
            if (process.env.API_KEY) {
                newUser.id = results.insertId;
                const token = jwt.sign({id: newUser.id}, process.env.API_KEY, {
                    expiresIn: 86400,
                });
                res.status(201).json({token});
            }
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json(error);
    }
}