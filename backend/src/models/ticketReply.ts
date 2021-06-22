export interface TicketReply {
    id?:number;
    ticketId:number;
    userId:number;
    reply:string;
    replyDate:number;
    name?:string;
    lastname?:string;
}