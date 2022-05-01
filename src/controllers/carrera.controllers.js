const Carrera = require("../models/carrera.models");

const CreateCarrera = async (req, res) => {
    const {codigo, nombre, descripcion} = req.body;
    const NewCarrera = new Carrera({codigo, nombre, descripcion});
    respuesta = await NewCarrera.save();
    res.send(respuesta)
}

const ReadCarrera = async (req, res) => {
    const respuesta = await Carrera.find({activo: true});
    res.send(respuesta);
}

const UpdateCarrera = async (req, res) => {
    const { codigo, nombre, descripcion } = req.body;
    respuesta = await Carrera.findOneAndUpdate(req.params.id, { codigo, nombre, descripcion });
    res.send(respuesta);
}

const DeleteCarrera = async (req, res) => {
    const { activo } = req.body;
    respuesta = await Carrera.findOneAndUpdate(req.params.id, { activo: false })
    res.send(respuesta);
}

module.exports = {CreateCarrera, ReadCarrera, UpdateCarrera, DeleteCarrera}
