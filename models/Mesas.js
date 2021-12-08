import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const mesasSchema = new Schema({
    idMesa:{type: Number, unique: true},
});

const Mesas = mongoose.model('mesas', mesasSchema);

export default Mesas;