require('dotenv').config(); // Carga las variables de entorno

const express = require('express');
const mongoose = require('mongoose');

const router = require('./routes/index');  // Tu router principal
const testRouter = require('./routes/test'); // Ruta de prueba MongoDB

const app = express();
const port = process.env.PORT || 3000;

// Mostrar la variable de entorno para depuración
console.log('Mongo URI:', process.env.MONGODB_URI);

// Conexión a MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('🟢 Conexión a MongoDB exitosa'))
  .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

app.use(express.json());

// Rutas principales
app.use('/', router);

// Ruta de prueba para verificar base de datos
app.use('/api/test-db', testRouter);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
