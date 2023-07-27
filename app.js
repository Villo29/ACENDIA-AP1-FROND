const express = require ('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
    host: '50.16.231.135',
    user: 'villo',
    password: '1234',
    database: '4letras',
});

app.get('/movimiento', (req, res) => {
    connection.query('SELECT * FROM hubMax', (err, results) => {
        if (err) {
            console.error('Error al obtener los datos:', err);
            return res.status(500).json({ error: 'Error al obtener los datos' });
        }
        res.json(results);
    });
});

app.listen(5000, () => {
    console.log('Servidor API iniciado');
});
