import connection from '../database';
import { TicketReply } from '../models/ticketReply';

export function createTicketReply(req:any, res:any) {
    const newTicketReply:TicketReply = req.body;

    connection.query("INSERT INTO ticketreplies SET ?", [newTicketReply], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(results);
    });
}

export function getTicketReplies(req:any, res:any) {
    return connection.query("SELECT * FROM ticketreplies", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketRepliesByTicketId(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT ticketreplies.*, users.name, users.lastname FROM ticketreplies JOIN users ON ticketreplies.userId = users.ID WHERE ticketId = ? ORDER BY replyDate", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getTicketReplyById(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT ticketreplies.*, users.name, users.lastname FROM ticketreplies JOIN users ON ticketreplies.userId = users.ID WHERE ticketreplies.ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results[0]);
    });
}

export function updateTicketReplyById(req:any, res:any) {
    let id = req.params.id;
    const updatedTicketReply:TicketReply = req.body;

    return connection.query("UPDATE ticketreplies SET ? WHERE ID = ?", [updatedTicketReply, id], (req_:any, results:any) => {
        res.status(204).send(results);
    });
}

export function deleteTicketReplyById(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM ticketreplies WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(204).send(`TicketReply eliminado!`);
    });
}