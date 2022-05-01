const express = require('express')

const router = express()

const CarreraController = require('../controllers/carrera.controllers')
const EstudianteController = require('../controllers/estudiante.controllers')

const vs = "/api/v1"

router.get(vs + '/estudiante', EstudianteController.ReadEstudiante)
    .post(vs + '/estudiante', EstudianteController.CreateEstudiante)
    .put(vs + '/estudiante/:id', EstudianteController.DeleteEstudiante)
    .put(vs + '/estudiante/:id', EstudianteController.UpdateEstudiante)

router.get(vs + '/carrera', CarreraController.ReadCarrera)
    .post(vs + '/carrera', CarreraController.CreateCarrera)
    .put(vs + '/carrera/:id', CarreraController.DeleteCarrera)
    .put(vs + '/carrera/:id', CarreraController.UpdateCarrera)

module.exports = router