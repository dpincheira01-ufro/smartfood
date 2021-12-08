import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mesasSchema = new Schema({
    idMesa: Number,
});

const Mesas = mongoose.model('mesas', mesasSchema);

export default Mesas;