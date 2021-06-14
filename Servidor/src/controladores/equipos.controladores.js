const { Pool } = require('pg');

const pool = new Pool({
    host: 'localhost',
    user: 'postgres',
    password: '0519',
    database: 'cuadrangular',
    port: '5432'
})

const equiposCtrl = {}

equiposCtrl.obtenerEquipos = async (req, res) => {
    const response = await pool.query('SELECT * FROM Equipos order by puntos desc, difgol desc, golfavor desc');
    res.status(200).json(response.rows);
}

equiposCtrl.registrarEquipo = async (req, res) => {
    const { nombre } = req.body;
    const response0 = await pool.query('SELECT Count(*) FROM Equipos');
    const registros = response0.rows[0].count;
    console.log(registros);
    if (registros < 4) {
        const response = await pool.query('INSERT INTO Equipos (nombre, partidosJugados, puntos, difgol, golfavor) VALUES ($1, $2, $3, $4, $5)', [nombre, 0, 0, 0, 0]);
        res.json('Equipo agregado');
    } else {
        res.json('Master... Es cuadrangular, son solo 4 equipos >:v');
    }
}
equiposCtrl.borrarEquipo = async (req, res) => {
    const nombre = req.params.nombre;
    const response = await pool.query('DELETE FROM Equipos WHERE nombre = $1', [nombre]);
    console.log(response);
    res.json('Equipo eliminado correctamente.');
}
equiposCtrl.actualizarPartido = async (req, res) => {
    //CONSULTAR DATOS
    const { nombre1, nombre2, goles1, goles2 } = req.body;
    const response = await pool.query('SELECT * FROM Equipos WHERE nombre = $1', [nombre1]);
    let { partidosjugados, puntos, difgol, golfavor } = response.rows[0];
    const response0 = await pool.query('SELECT * FROM Equipos WHERE nombre = $1', [nombre2]);

    partidosjugados0 = response0.rows[0].partidosjugados;
    puntos0 = response0.rows[0].puntos;
    difgol0 = response0.rows[0].difgol;
    golfavor0 = response0.rows[0].golfavor;
    //ACTUALIZAR DATOS
    if (goles1 > goles2) {
        const response1 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados + 1,
            puntos + 3,
            difgol + goles1 - goles2,
            golfavor + goles1,
            nombre1
        ]);
        const response2 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados0 + 1,
            puntos0 + 0,
            difgol0 + goles2 - goles1,
            golfavor0 + goles2,
            nombre2
        ]);
    } else if (goles2 > goles1) {
        const response1 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados + 1,
            puntos + 0,
            difgol + goles1 - goles2,
            golfavor + goles1,
            nombre1
        ]);
        const response2 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados0 + 1,
            puntos0 + 3,
            difgol0 + goles2 - goles1,
            golfavor0 + goles2,
            nombre2
        ]);
    } else {
        const response1 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados + 1,
            puntos + 1,
            difgol + goles1 - goles2,
            golfavor + goles1,
            nombre1
        ]);
        const response2 = await pool.query('UPDATE Equipos SET partidosjugados = $1, puntos = $2, difgol = $3, golfavor = $4 WHERE nombre = $5', [
            partidosjugados0 + 1,
            puntos0 + 1,
            difgol0 + goles2 - goles1,
            golfavor0 + goles2,
            nombre2
        ]);
    }
    res.json('Tabla de posiciones actualizada');
}
equiposCtrl.actualizarEmpate = async (req, res) => {
    const { nombre1, nombre2, goles1, goles2 } = req.body;
    const response = await pool.query('SELECT * FROM Equipos WHERE nombre = $1', [nombre1]);
    let { partidosjugados, nombre, id } = response.rows[0];
    console.log(partidosjugados);
    console.log(nombre);
    console.log(id);
    nombre = "Ola";
    partidosjugados = 5;
    console.log(nombre);
    console.log(partidosjugados);
    partidosjugados = response.rows[0].partidosjugados;
    console.log(partidosjugados);
    console.log(nombre);
    console.log(id);
    res.status(200).json(response.rows[0].id);
}
module.exports = equiposCtrl;