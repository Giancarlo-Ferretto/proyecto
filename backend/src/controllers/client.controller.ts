import connection from '../database';
import { Client } from '../models/client';

export function getClients(req:any, res:any) {
    return connection.query("SELECT * FROM clients", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getClient(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM clients WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function postClient(req:any, res:any) {
    const newClient:Client = req.body;

    return connection.query("INSERT INTO clients SET ?", [newClient], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`Client insertado con el id:${results.insertId}!`);
    });
}

export function putClient(req:any, res:any) {
    let id = req.params.id;
    const updatedClient:Client = req.body;

    return connection.query("UPDATE clients SET ? WHERE ID = ?", [updatedClient, id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function deleteClient(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM clients WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(`Client eliminado!`);
    });
}