CREATE DATABASE cuadrangular;

CREATE TABLE Equipos(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(30),
    partidosJugados INT,
    puntos INT,
    difGol INT,
    golFavor INT
);

INSERT INTO Equipos (nombre, partidosJugados, puntos, difGol, golFavor) VALUES 
    ('River Plate', 0, 0, 0, 0),
    ('Estudiantes', 0, 0, 0, 0),
    ('Independiente', 0, 0, 0, 0),
    ('Boca Juniors', 0, 0, 0, 0);