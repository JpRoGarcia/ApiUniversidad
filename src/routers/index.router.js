const express = require('express')

const router = express()

const CarreraController = require('../controllers/carrera.controllers')
const EstudianteController = require('../controllers/estudiante.controllers')

const vs = "/api/v1"

router.get(vs + '/estudiante', EstudianteController.ReadEstudiante)
    .post(vs + '/estudiante', EstudianteController.CreateEstudiante)
    .delete(vs + '/estudiante/:id', EstudianteController.DeleteEstudiante)
    .put(vs + '/estudiantes/:id', EstudianteController.UpdateEstudiante)

router.get(vs + '/carrera/:codigo', CarreraController.ReadCarrera)
    .get(vs + '/carrera', CarreraController.ReadCarreras)
    .post(vs + '/carrera', CarreraController.CreateCarrera)
    .delete(vs + '/carrera/:id', CarreraController.DeleteCarrera)
    .put(vs + '/carreras/:id', CarreraController.UpdateCarrera)

module.exports = router