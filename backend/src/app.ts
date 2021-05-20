const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

//config
app.set('port', process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req:any, res:any) => {
    return res.send('Hello world!');
});

export default app;