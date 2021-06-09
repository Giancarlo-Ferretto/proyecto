export interface User {
    id:number;
    name:string;
    lastname:string;
    password:string | undefined;
    isAdmin:number;
    rut:string;
    email:string;
    address:string;
    city:string;
    region:string;
}