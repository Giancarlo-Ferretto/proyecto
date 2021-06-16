import connection from '../database';
import { Ticket } from '../models/ticket';

export function createTicket(req:any, res:any) {
    const newTicket:Ticket = req.body;

    return connection.query("INSERT INTO tickets SET ?", [newTicket], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`Ticket insertado con el id:${results.insertId}!`);
    });
}

export function getTickets(req:any, res:any) {
    return connection.query("SELECT * FROM tickets", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketById(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM tickets WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketByUserId(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM tickets WHERE userId = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function updateTicketById(req:any, res:any) {
    let id = req.params.id;
    const updatedTicket:Ticket = req.body;

    return connection.query("UPDATE tickets SET ? WHERE ID = ?", [updatedTicket, id], (req_:any, results:any) => {
        res.status(204).send(results);
    });
}

export function deleteTicketById(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM tickets WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(204).send(`Ticket eliminado!`);
    });
}