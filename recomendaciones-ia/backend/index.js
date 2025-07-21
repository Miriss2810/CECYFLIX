const express = require('express');
const mongoose = require('mongoose');
const router = require('./routes/index'); // Importa tu router
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// 🔧 CAMBIO AQUÍ: Usar la variable correcta que configuraste en Render
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('🟢 Conexión a MongoDB exitosa'))
  .catch(err => console.error('🔴 Error al conectar a MongoDB:', err));

app.use(express.json());

// Usa el router en la ruta raíz
app.use('/', router);

app.listen(port, () => {
  console.log(`Servidor corriendo en puerto ${port}`);
});
