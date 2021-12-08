import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    usuario: {type: String, unique: true ,required: true}, 
    contrasena: {type: String, required: true},
});

const Admin = mongoose.model('admin', adminSchema);

export default Admin; 