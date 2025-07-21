const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

// Modelo de prueba
const TestSchema = new mongoose.Schema({ mensaje: String });
const Test = mongoose.model('Test', TestSchema);

// Ruta: GET /api/test-db
router.get('/', async (req, res) => {
  try {
    const nuevo = new Test({ mensaje: '¡Conexión exitosa con MongoDB!' });
    await nuevo.save();
    res.json({
      ok: true,
      mensaje: 'Documento guardado en MongoDB',
      data: nuevo
    });
  } catch (err) {
    res.status(500).json({ ok: false, error: err.message });
  }
});

module.exports = router;
