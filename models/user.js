const mongoose = require('mongoose');
const db = require('../db')
const { Schema } = mongoose;

const usuarioSchema = new Schema({
  nombre: { type: String, required: true },
  tipodesangre : { type: String, required: true},
  correo: { type: String, required: true, unique: true },
  telefono: {type: String, requierd: true},
  contrasena: { type: String, required: true },
});

const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;