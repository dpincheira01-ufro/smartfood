import express from 'express';
const router = express.Router();

import Admin from '../models/Admin';

router.post('/Admin', async(req, res) => {
    const body = req.body;
    try {
        const adminDB = await Admin.create(body);
        res.status(200).json(adminDB);
    } catch (error) {
        return res.status(500).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});

module.exports = router;