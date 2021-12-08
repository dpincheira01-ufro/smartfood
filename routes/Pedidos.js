import express from 'express';
const router = express.Router();

import Pedidos from '../models/Pedidos';

router.post('/Pedidos', async(req, res) => {
    const body = req.body;
    try {
        const pedidosDB = await Pedidos.create(body);
        res.status(200).json(pedidosDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;