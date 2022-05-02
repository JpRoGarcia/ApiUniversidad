const Carrera = require("../models/carrera.models");
const Estudiante = require("../models/estudiante.models");
const errorFormato = require("../validation/messageError")

const CreateCarrera = async (req, res) => {
    try {
        const {codigo, nombre, descripcion} = req.body;
        const NewCarrera = new Carrera({codigo, nombre, descripcion});
        respuesta = await NewCarrera.save();
        res.send(respuesta)
    } catch (error) {
        respuesta = errorFormato(error.message);
        console.log(respuesta);
        res.send(respuesta);
    }
}

const ReadCarrera = async (req, res) => {
    respuesta = {}
    try {
        const respuestaC = await Carrera.find({codigo: req.params.codigo, activo: true})
        const respuestaE = await Estudiante.find({carrera: req.params.codigo, activo: true})
        respuesta = respuestaC.concat(respuestaE)
        res.send(respuesta);
    } catch (Error) {
        respuesta.ok = false;
        respuesta.message = 'Error al Consultar Carrera';
        respuesta.info = Error
        res.status(500).send(respuesta);
    }

}

const ReadCarreras = async (req, res) => {
    respuesta = {}
    try {
        const respuesta = await Carrera.find({activo: true});
        res.send(respuesta);
    } catch (Error) {
        respuesta.ok = false;
        respuesta.message = 'Erroe al Eliminar Carrera';
        respuesta.info = Error
        res.status(500).send(respuesta);
    }

}

const UpdateCarrera = async (req, res) => {
    try {
        const { nombre, descripcion } = req.body;
        respuesta = await Carrera.findOneAndUpdate(req.params.id, { nombre, descripcion });
        res.send(respuesta);
    } catch (error) {
        respuesta = errorFormato(error.message);
        res.send("Carrera Editada Exitosamente");
    }
}

const DeleteCarrera = async (req, res) => {
    respuesta = {}
    try {
        const { activo } = req.body;
        respuesta = await Carrera.findOneAndUpdate(req.params.id, { activo: false })
        res.send("Carrera Eliminado Exitosamente");  
    } catch (Error) {
        respuesta.ok = false;
        respuesta.message = 'Erroe al Eliminar Carrera';
        respuesta.info = Error
        res.status(500).send(respuesta);
    }
}


module.exports = {CreateCarrera, ReadCarrera, ReadCarreras, UpdateCarrera, DeleteCarrera}
