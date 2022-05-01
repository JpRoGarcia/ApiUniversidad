const mongoose = require("mongoose");
require('../config/index.config')

const ConectarDB = process.env.URI_MONGODB +'/'+ process.env.DB_MONGODB;

mongoose.connect(ConectarDB, {
      useUnifiedTopology: true,
      useNewUrlParser: true
}).then(db => console.log("Se Conceto Base de Datos"))
  .catch(err => console.error(err))