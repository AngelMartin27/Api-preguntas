const express = require('express');
const cors = require('cors');
const QUESTIONS = require('./questions.json'); // Importa las preguntas

const app = express();
const port = process.env.PORT || 3000;

// IMPORTANTE: Configurar CORS para acceso público
app.use(cors()); // Permite solicitudes desde cualquier origen [cite: 35, 99]

// Ruta principal
app.get('/api/questions', (req, res) => {
    res.json(QUESTIONS); // Devuelve el JSON [cite: 39]
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});