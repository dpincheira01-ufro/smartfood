import express from 'express';
const router = express.Router();

import Productos from '../models/Productos';

router.post('/Productos', async(req, res) => {
    const body = req.body;
    try {
        const productosDB = await Productos.create(body);
        res.status(200).json(productosDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;