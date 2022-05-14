const Estudiante = require("../models/estudiante.models");
const Carrera = require("../models/carrera.models");
const errorFormato = require("../validation/messageError")

const CreateEstudiante = async (req, res) => {
    try {
        const {nro_identificacion, nombre_1, nombre_2, apellido_1, apellido_2, fecha_de_nacimiento, activo, carrera} = req.body;
        const respuestaC = await Carrera.find({codigo: carrera, activo: true})
        if(respuestaC.length > 0){
            const NewEstudiante = new Estudiante({nro_identificacion, nombre_1, nombre_2, apellido_1, apellido_2, fecha_de_nacimiento, activo, carrera});
            respuesta = await NewEstudiante.save();
        }else{
            res.send("Codigo de Carrera no Existe")
        }
    } catch (error) {
        respuesta = errorFormato(error.message);
        res.status(500).send(respuesta);
    }
}

const ReadEstudiante = async (req, res) => {
    respuesta = {}
    try {
        const respuesta = await Estudiante.aggregate([
            {
                $lookup:{
                    from: "carreras",
                    localField: "carrera",
                    foreignField: "codigo",
                    as: "EstudianteCarrera"
                }
            },
            {$match: {activo: true}}
        ])
    
        res.send(respuesta);
    } catch (Error) {
        respuesta.ok = false;
        respuesta.message = 'Error al Eliminar Carrera';
        respuesta.info = Error
        res.status(500).send(respuesta);
    }


}

const UpdateEstudiante = async (req, res) => {
    try {
        const { nombre_1, nombre_2, apellido_1, apellido_2 } = req.body;
        respuesta = await Estudiante.findOneAndUpdate(req.params.id, 
            { nombre_1, nombre_2, apellido_1, apellido_2 });
        res.send("Estudiante Editado Exitosamente");
    } catch (error) {
        respuesta = errorFormato(error.message);
        res.status(500).send(respuesta);
    }
}

const DeleteEstudiante = async (req, res) => {
    respuesta = {}
    try {
        const { activo } = req.body;
        respuesta = await Estudiante.findOneAndUpdate(req.params.id, { activo: false })
        res.send("Estudiante Eliminado Exitosamente");
    } catch (Error) {
        respuesta.ok = false;
        respuesta.message = 'Error al Eliminar Carrera';
        respuesta.info = Error
        res.status(500).send(respuesta);
    }
}

module.exports = {CreateEstudiante, ReadEstudiante, UpdateEstudiante, DeleteEstudiante}