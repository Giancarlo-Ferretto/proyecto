import connection from '../database';
import { User } from '../models/user';

export function createUser(req:any, res:any) {
    const newUser:User = req.body;

    return connection.query("INSERT INTO users SET ?", [newUser], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`User insertado con el id:${results.insertId}!`);
    });
}

export function getUsers(req:any, res:any) {
    return connection.query("SELECT * FROM users", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getUserById(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM users WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function updateUserById(req:any, res:any) {
    let id = req.params.id;
    const updatedUser:User = req.body;

    return connection.query("UPDATE users SET ? WHERE ID = ?", [updatedUser, id], (req_:any, results:any) => {
        res.status(204).send(results);
    });
}

export function deleteUserById(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM users WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(204).send(`User eliminado!`);
    });
}