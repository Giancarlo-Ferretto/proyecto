export interface Ticket {
    id?:number;
    userId:number;
    status:string;
    priority:string;
    category:string;
    subject:string;
    description:string;
    creationDate:string;
}