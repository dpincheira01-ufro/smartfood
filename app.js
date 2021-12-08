const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');

const dbConnection = require('./database/config');

const app = express()

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const history = require('connect-history-api-fallback');
app.use(history());

// conexion a mongodb
dbConnection();

// archivos publicos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.use('/', require('./routes/Admin'));
app.use('/', require('./routes/Mesas'));
app.use('/', require('./routes/Pedidos'));
app.use('/', require('./routes/Productos'));

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), function() {
    console.log(`App corriendo en el puerto: http://localhost:${app.get('PORT')}`);
});