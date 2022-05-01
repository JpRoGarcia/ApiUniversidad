const Carrera = require("../models/carrera.models");

const CreateCarrera = async (req, res) => {
    prueba = "Aqui se Crea Carrera"
    console.log(prueba);
    res.send(prueba)
}

const ReadCarrera = async (req, res) => {
    prueba = "Aqui se Lee Carrera"
    console.log(prueba);
    res.send(prueba)
}

const UpdateCarrera = async (req, res) => {
    prueba = "Aqui se Actualiza Carrera"
    console.log(prueba);
    res.send(prueba)
}

const DeleteCarrera = async (req, res) => {
    prueba = "Aqui se Elimina Carrera"
    console.log(prueba);
    res.send(prueba)
}

module.exports = {CreateCarrera, ReadCarrera, UpdateCarrera, DeleteCarrera}
