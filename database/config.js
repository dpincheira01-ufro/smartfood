const mongoose = require('mongoose');
const uri = 'mongodb+srv://diegop:diego123@mongodb.9x4su.mongodb.net/SmartFood?authSource=admin&replicaSet=atlas-10m1s2-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,

};

const dbConnection = () => {
    mongoose.connect(uri, options)
        .then(() => console.log('conectado a la DB'))
        .catch(e => console.log('error al conectar DB:', e))
}

module.exports = dbConnection;