import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const pedidosSchema = new Schema({
    total:{type: Number, required: true},
    subtotal:{type: Number,required: true},
    propina: {type : Number, required: true}
});

const Pedidos = mongoose.model('pedidos', pedidosSchema);

export default Pedidos;