import app from './app';

app.listen(app.get('port'), () => {
    console.log(`Escuchando en http://localhost:${app.get('port')}!`);
});