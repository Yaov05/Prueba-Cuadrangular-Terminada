const { Router } = require('express');
const router = Router();

const objEquipo = require('../controladores/equipos.controladores.js');

router.get('/editar', objEquipo.obtenerEquipos);
router.get('/editar/:nombre', objEquipo.actualizarEmpate);
router.post('/editar', objEquipo.registrarEquipo);
router.delete('/editar/:nombre', objEquipo.borrarEquipo);
router.put('/editar', objEquipo.actualizarPartido);



module.exports = router;