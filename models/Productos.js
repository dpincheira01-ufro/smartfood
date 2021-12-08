import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre:{type: String, required: true},
    categoria: {type: String, required: true},
    descripcion: {type: String, required: true},
    cantidad: {type: Number, required: true},
    estado: {type: Boolean, unique: true}
})

const Productos = mongoose.model('productos', productosSchema);

export default Productos;