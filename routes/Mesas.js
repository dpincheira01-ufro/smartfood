import express from 'express';
const router = express.Router();

import Mesas from '../models/Mesas';

router.post('/Mesas', async(req, res) => {
    const body = req.body;
    try {
        const mesasDB = await Mesas.create(body);
        res.status(200).json(mesasDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;