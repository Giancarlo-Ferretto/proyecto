import jwt from "jsonwebtoken";
require('dotenv').config();

export const checkToken = async (req:any, res:any, next:any) => {
    const token = req.headers["access-token"];
    if (!token) return res.status(403).json({message: "Unauthorized!"});
    try {
        if (process.env.API_KEY) {
            //const decodedToken = jwt.verify(token, process.env.API_KEY);
            //verificar si usuario aún existe?
            jwt.verify(token, process.env.API_KEY, (err:any, decoded:any) => {
                if (err) return res.status(403).json({message: "Unauthorized!"});
                next();
            });
        }
    }
    catch (error) {
        console.log(error);
        return res.status(403).json({message: "Unauthorized!"});
    }
}