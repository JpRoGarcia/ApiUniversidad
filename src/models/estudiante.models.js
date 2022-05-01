const {Schema, model} = require("mongoose");

const EstudianteSchema = new Schema({
    nro_identificacion: {
        type           : String, 
        required       : [ true, 'El Número de identificación del Estudiante es Obligatorio' ],
        unique         : [ true, 'El Número de identificación del Estudiante ya existe' ],
        maxlength      : [ 10, 'El Número de identificación no puede exceder 15 caracteres' ],
        minlength      : [ 8, 'El Número de identificación debe contener Minimo 8 caracteres' ]
    },
    nombre_1: {
        type           : String, 
        required       : [ true, 'El Primer Nombre del Estudiante es Obligatorio' ],
        maxlength      : [ 100, 'El Primer Nombre no puede exceder los 100 caracteres' ],
        minlength      : [ 5, 'El Primer Nombre debe contener Minimo 5 caracteres' ]
    },
    nombre_2: {
        type           : String, 
        maxlength      : [ 100, 'El Segundo Nombre no puede exceder los 100 caracteres' ],
        minlength      : [ 5, 'El Segundo Nombre debe contener Minimo 5 caracteres' ]
    },
    apellido_1: {
        type           : String, 
        required       : [ true, 'El Primer Apellido del Estudiante es Obligatorio' ],
        maxlength      : [ 100, 'El Primer Apellido no puede exceder los 100 caracteres' ],
        minlength      : [ 5, 'El Primer Apellido debe contener Minimo 5 caracteres' ]
    },
    apellido_2 : {
        type           : String, 
        maxlength      : [ 100, 'El Segundo Apellido no puede exceder los 100 caracteres' ],
        minlength      : [ 5, 'El Segundo Apellido debe contener Minimo 5 caracteres' ]
    },    
    fecha_de_nacimiento: {
        type           : Date, 
        required       : true,
    },
    activo: {
        type           : Boolean, 
        default        : true
    },
    carrera: {
        type           : String, 
        required       : [ true, 'El Codigo de la Carrera es Obligatorio' ]
    }
});

module.exports = model('Estudiante', EstudianteSchema);