// archivo: app.js

const express = require('express');
const app = express();
const cors = require('cors');
const Usuario = require('./models/user.js');

app.use(express.json());

app.use(cors());

// Ruta para obtener todos los usuarios
app.post('/login', async (req, res) => {
  const { correo, contrasena } = req.body
  
 try{
  const usuarios = await Usuario.find({ where: {correo:correo}});
  if(usuarios.contrasena==contrasena)
  res.json({ok:true}) 
  else
  res.json({error})
 }
 catch(error){
  console.log(error)
  res.json({error})

 }
  
});

// Ruta para obtener un usuario por ID
app.get('/usuarios/:id', async (req, res) => {
  const usuario = await Usuario.findById(req.params.id);
  res.json(usuario);
});

// Ruta para crear un nuevo usuario
app.post('/usuarios', async (req, res) => {
  const usuario = new Usuario(req.body);
  await usuario.save();
  res.json(usuario);
});

// Ruta para actualizar un usuario por ID
app.put('/usuarios/:id', async (req, res) => {
  const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(usuario);
});

// Ruta para eliminar un usuario por ID
app.delete('/usuarios/:id', async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: 'Usuario eliminado' });
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});