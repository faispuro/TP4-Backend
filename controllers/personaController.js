const {getPersonas} = require('../models/personaModelo');

const obtenerPersona = (req, res) => {
    const personas = getPersonas();
    res.json(personas);
};

module.exports = {obtenerPersona};