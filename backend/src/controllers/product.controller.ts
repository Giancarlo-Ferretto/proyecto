import connection from '../database';
import { product } from '../models/product';

//CRUD = Create (POST) - Read (GET) - Update (POST) - Delete (delete)
//GET
export function getProducts(req:any, res:any) {
    return connection.query("SELECT * FROM products", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getProduct(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM products WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//POST
export function postProduct(req:any, res:any) {
    const newProduct:product = req.body

    return connection.query("INSERT INTO products SET ?", [newProduct], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`Product insertado con el id:${results.insertId}!`);
    });
}

//PUT
export function putProduct(req:any, res:any) {
    let id = req.params.id;
    const updatedProduct:product = req.body

    return connection.query("UPDATE products SET ? WHERE ID = ?", [updatedProduct, id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//DELETE
export function deleteProduct(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM products WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(`Product eliminado!`);
    });
}