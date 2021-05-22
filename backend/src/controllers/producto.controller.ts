import connection from '../database';
import { producto } from '../models/producto';

//CRUD = Create (POST) - Read (GET) - Update (POST) - Delete (delete)
//GET
export function getProductos(req:any, res:any) {
    return connection.query("SELECT * FROM productos", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function getProducto(req:any, res:any) {
    let id = req.params.id;
    return connection.query("SELECT * FROM productos WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//POST
export function postProducto(req:any, res:any) {
    const newProducto:producto = JSON.parse(JSON.stringify(req.body));

    return connection.query("INSERT INTO productos SET ?", [newProducto], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`Producto insertado con el id:${results.insertId}!`);
    });
}

//PUT
export function putProducto(req:any, res:any) {
    let id = req.params.id;
    const updatedProducto:producto = JSON.parse(JSON.stringify(req.body));

    return connection.query("UPDATE productos SET ? WHERE ID = ?", [updatedProducto, id], (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

//DELETE
export function deleteProducto(req:any, res:any) {
    let id = req.params.id;
    
    return connection.query("DELETE FROM productos WHERE ID = ?", [id], (req_:any, results:any) => {
        res.status(200).send(`Producto eliminado!`);
    });
}