import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

const app = express();

//config
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
    
//hello world
app.get('/', (req:any, res:any) => {
    return res.send('Hello world!');
});

//imports
import clientRoutes from './routes/client.routes';
app.use('/client', clientRoutes);

export default app;