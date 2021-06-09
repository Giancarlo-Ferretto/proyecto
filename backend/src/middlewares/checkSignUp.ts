import connection from "../database";

export const checkDuplicateUser = async (req:any, res:any, next:any) => {
    connection.query("SELECT ID FROM users WHERE email = ? OR rut = ?", [req.body.email, req.body.rut], function (error:any, results:any) {
        if (error) throw error;
        if (results.length != 0) return res.status(400).json({message: "El correo electrónico y/o el rut ya están registrados."});
        next();
    });
}