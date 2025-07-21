const express = require('express');
const router = express.Router();

// Ruta de ejemplo
router.get('/', (req, res) => {
  res.send('Ruta principal del router funcionando!');
});

module.exports = router;
