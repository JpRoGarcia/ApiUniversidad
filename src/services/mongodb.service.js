const mongoose = require("mongoose");
require('../config/index.config')

const ConctarDB = process.env.URI_MONGODB +'/'+ process.env.MONGODB;

mongoose.connect(ConctarDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
}).then(db => console.log("Se Conceto Base de Datos"))
  .catch(err => console.error(err))