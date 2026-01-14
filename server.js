const express = require('express');
const cors = require('cors');
const QUESTIONS = require('./questions.json'); // Importa las preguntas

const app = express();
const port = process.env.PORT || 3000;

// IMPORTANTE: Configurar CORS para acceso público
app.use(cors()); // Permite solicitudes desde cualquier origen

// --- NUEVO: Ruta de bienvenida para evitar el error 404 en la portada ---
app.get('/', (req, res) => {
    res.send('<h1>API de Preguntas</h1><p>La API está funcionando. Ve a <a href="/api/questions">/api/questions</a> para ver los datos.</p>');
});

// Ruta principal que devuelve las preguntas
app.get('/api/questions', (req, res) => {
    res.json(QUESTIONS); // Devuelve el JSON
});

// Iniciar servidor
app.listen(port, () => {
    console.log(`API escuchando en http://localhost:${port}`);
});