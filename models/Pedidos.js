import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    total: Number,
    subtotal: Number,
    propina: Number
});

const Pedidos = mongoose.model('pedidos', pedidosSchema);

export default Pedidos;