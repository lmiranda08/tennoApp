CREATE TABLE IF NOT EXISTS Pendientes(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre TEXT, 
    Tipo TEXT,
    Componentes TEXT,
    Farmeo text,
    Otros text
);

CREATE TABLE IF NOT EXISTS Ventas(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Nombre TEXT, 
    Precio TEXT,
    Favorito INTEGER
);
/* 
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (1, 'Prueba1', 'Prueba1', 'Prueba1', 'Prueba1', 'Prueba1', getDate());
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (2, 'Prueba2', 'Prueba2', 'Prueba2', 'Prueba2', 'Prueba2', getDate());
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (3, 'Prueba3', 'Prueba3', 'Prueba3', 'Prueba3', 'Prueba3', getDate());
 */