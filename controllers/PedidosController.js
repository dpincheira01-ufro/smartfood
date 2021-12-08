const Pedido = require ('../models/Pedidos')

const createPedido = async (req, res) =>{
    try{
        const newPedido = await Pedido.create({...req.body, mesa: req.params.id});
        res.status(201).send(newPedido)
    }catch(error){
        res.status(500).send({error: "ha ocurrido un error en el sistema"})
    }
}

const updatePedido = async (req, res) => {
    try{
        const pedido = await Pedido.findByIdAndUpdate(req.params.id, req.body,{new:true})
        res.json(pedido)
    }catch(error){
        res.status(500).send({error: "ha ocurrido un error en el sistema"})
    }
 }

module.exports= {
    createPedido,
    updatePedido

}