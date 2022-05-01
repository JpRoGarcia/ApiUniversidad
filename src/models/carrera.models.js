const {Schema, model} = require("mongoose");

const CarreraSchema = new Schema({
    codigo: {
        type           : String, 
        required       : [ true, 'El Codigo de la Carrera es Obligatorio' ],
        unique         : [ true, 'El Codigo de la Carrera ya existe' ],
        maxlength      : [ 10, 'El Codigo no puede exceder 10 caracteres' ],
        minlength      : [ 2, 'El Codigo debe contener Minimo 3 caracteres' ]
    },
    nombre: {
        type           : String, 
        required       : [ true, 'El Nombre de la Carrera es Obligatorio' ],
        maxlength      : [ 150, 'El Nombre de la Carrera no puede exceder los 150 caracteres' ],
        minlength      : [ 5, 'El Nombre debe contener Minimo 5 caracteres' ]
    },
    descripcion: {
        type           : String,
        maxlength      : [500, 'La Descripción no puede exceder los 500 caracteres'],
    },
    activo: {
        type           : Boolean, 
        default        : true
    },
});

module.exports = model('Carrera', CarreraSchema);