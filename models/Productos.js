import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const productosSchema = new Schema({
    nombre: String,
    categoria: String,
    descripcion: String,
    cantidad: Number,
    estado: Boolean
});

const Productos = mongoose.model('productos', productosSchema);

export default Productos;