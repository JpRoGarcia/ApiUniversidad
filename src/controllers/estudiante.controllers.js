const Estudiante = require("../models/carrera.models");

const CreateEstudiante = async (req, res) => {
    prueba = "Aqui se crea Estudiante"
    console.log(prueba);
    res.send(prueba)
}


const ReadEstudiante = async (req, res) => {
    prueba = "Aqui se Lee Estudiante"
    console.log(prueba);
    res.send(prueba)
}

const UpdateEstudiante = async (req, res) => {
    prueba = "Aqui se Actualiza Estudiante"
    console.log(prueba);
    res.send(prueba)
}

const DeleteEstudiante = async (req, res) => {
    prueba = "Aqui se Elimina Estudiante"
    console.log(prueba);
    res.send(prueba)
}

module.exports = {CreateEstudiante, ReadEstudiante, UpdateEstudiante, DeleteEstudiante}