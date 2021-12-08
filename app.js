const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const uri = 'mongodb+srv://diegop:diego123@mongodb.9x4su.mongodb.net/SmartFood?authSource=admin&replicaSet=atlas-10m1s2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const options = { useNewUrlParser: true };

// Or using promises
mongoose.connect(uri, options).then(
    /** ready to use. The `mongoose.connect()` promise resolves to mongoose instance. */
    () => { console.log('Conectado a DB') },
    /** handle initial connection error */
    err => { console.log(err) }
);

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', function(req, res) {
    res.send('Hello World!');
});

// Middleware para Vue.js router modo history
const history = require('connect-history-api-fallback');
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));

app.set('PORT', process.env.PORT || 3000);
app.listen(app.get('PORT'), function() {
    console.log('APP ESCUCHANDO A PUERTO ' + app.get('PORT'));
});
app.use('/api', require('./routes/Admin'));
app.use('/api', require('./routes/Mesas'));
app.use('/api', require('./routes/Pedidos'));
app.use('/api', require('./routes/Productos'));