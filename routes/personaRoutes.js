const express =require('express');
const router = express.Router();

const {obtenerPersona} = require('../controllers/personaController');

router.get('/', obtenerPersona);

module.exports = router;