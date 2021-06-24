import connection from '../database';
import { Ticket } from '../models/ticket';

export function createTicket(req:any, res:any) {
    const newTicket:Ticket = req.body;

    connection.query("INSERT INTO tickets SET ?", [newTicket], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(results);
    });
}

export function getTickets(req:any, res:any) {
    connection.query("SELECT * FROM tickets ORDER BY FIELD(status, 'Abierto', 'En proceso', 'Cerrado')", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketById(req:any, res:any) {
    let id = req.params.id;
    connection.query("SELECT tickets.*, users.name, users.lastname FROM tickets JOIN users ON tickets.userId = users.ID WHERE tickets.ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results[0]);
    });
}

export function getTicketByUserId(req:any, res:any) {
    let id = req.params.id;
    connection.query("SELECT * FROM tickets WHERE userId = ? ORDER BY creationDate", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketByStatusUserId(req:any, res:any) {
    let id:number = req.params.id;
    let status:string = req.params.status;
    connection.query("SELECT * FROM tickets WHERE status = ? AND userId = ? ORDER BY creationDate", [status, id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function updateTicketById(req:any, res:any) {
    let id:number = req.params.id;
    const updatedTicket:any = { status:req.body.status, priority:req.body.priority, category:req.body.category, subject:req.body.subject, description:req.body.description };
    connection.query("UPDATE tickets SET ? WHERE ID = ?", [updatedTicket, id], (req_:any, results:any) => {
        res.status(204).send(`Ticket actualizado!`);
    });
}

export function deleteTicketById(req:any, res:any) {
    let id = req.params.id;
    connection.query("DELETE FROM tickets WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(204).send(`Ticket eliminado!`);
    });
}