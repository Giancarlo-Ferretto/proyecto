import connection from '../database';
import { user } from '../models/user';

//CRUD = Create (POST) - Read (GET) - Update (POST) - Delete (delete)
//GET
export function getUsers(req:any, res:any) {
    return connection.query("SELECT * FROM users", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getUser(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM users WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//POST
export function postUser(req:any, res:any) {
    const newUser:user = JSON.parse(JSON.stringify(req.body));

    return connection.query("INSERT INTO users SET ?", [newUser], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`User insertado con el id:${results.insertId}!`);
    });
}

//PUT
export function putUser(req:any, res:any) {
    let id = req.params.id;
    const updatedUser:user = JSON.parse(JSON.stringify(req.body));

    return connection.query("UPDATE users SET ? WHERE ID = ?", [updatedUser, id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//DELETE
export function deleteUser(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM users WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(`User eliminado!`);
    });
}