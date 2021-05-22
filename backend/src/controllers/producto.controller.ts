import connection from '../database';
import { producto } from '../models/producto';

export function getProductos(req:any, res:any): Promise<Response> {
    return connection.query("SELECT * FROM productos", (req_:any, results:any) => {
        res.status(200).send(results);
    });
}

export function postProducto(req:any, res:any) {
    const newProducto:producto = JSON.parse(JSON.stringify(req.body));

    return connection.query("INSERT INTO productos SET ?", [newProducto], function (error:any, results:any, fields:any) {
        if (error) throw error;
        res.status(201).send(`Producto insertado con el id:${results.insertId}!`);
    });
}