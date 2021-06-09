import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';

import authRoutes from './routes/auth.routes';
import userRoutes from './routes/user.routes';

const app = express();

//settings
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
    
//hello world
app.get('/', (req:any, res:any) => {
    return res.send('Hola mundo!');
});

//routes
app.use('/auth', authRoutes);
app.use('/users', userRoutes);

export default app;