const Admin = require('../models/Admin')

async function GetAll(req, res){
    const admins = await Admin.find();
    return res.send(admins.map(admin=> basicDetails(admin)))

}

async function getById(req, res){
    const admin = await Admin.findById(req.params.id)
    if(!admin) 
    return res.status(404).send({
        error: "Usuario administrador no registrado"
    })
    return res.send(basicDetails(admin))
}

async function deleteUser(req, res){
    Admin.findByIdAndDelete(req.params.id)
    .then(()=> res.sendStatus(204))
    .catch(error => res.status(400).send({error:"error"}))

}

function basicDetails(admin){
    const {id, usuario, contrasena, created, updated} = admin;
    return {id, usuario, contrasena, created, updated}
}

module.exports = {
    GetAll,
    getById,
    delete: deleteUser,
    basicDetails
}