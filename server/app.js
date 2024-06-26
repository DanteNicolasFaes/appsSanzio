const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta para cargar todos los pacientes desde pacientes.json
app.get('/pacientes', (req, res) => {
    fs.readFile('../db/pacientes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al cargar los pacientes.');
        }
        res.json(JSON.parse(data));
    });
});

// Ruta para agregar un nuevo paciente
app.post('/pacientes', (req, res) => {
    const nuevoPaciente = req.body;
    console.log(nuevoPaciente)
    let pacientes;
    fs.readFile('../db/pacientes.json', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al cargar los pacientes.');
        pacientes = data

        }
        
    });

    fs.writeFile('../db/pacientes.json', JSON.stringify(pacientes), err => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al guardar el paciente.');
        }
        pacientes = JSON.parse(data);
        res.status(201).send('Paciente agregado con éxito.');


    });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
