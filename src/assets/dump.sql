CREATE TABLE IF NOT EXISTS Items(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    category TEXT,
    component TEXT,
    farming text,
    extra text
);

CREATE TABLE IF NOT EXISTS Sales(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT, 
    balance TEXT
);
/* 
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (1, 'Prueba1', 'Prueba1', 'Prueba1', 'Prueba1', 'Prueba1', getDate());
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (2, 'Prueba2', 'Prueba2', 'Prueba2', 'Prueba2', 'Prueba2', getDate());
INSERT or IGNORE INTO Pendientes(id, nombre, tipo, componentes, farmeo, otros, fecha) VALUES (3, 'Prueba3', 'Prueba3', 'Prueba3', 'Prueba3', 'Prueba3', getDate());
 */