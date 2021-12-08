import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    usuario: String,
    contrasena: String
});

const Admin = mongoose.model('admin', adminSchema);

export default Admin;