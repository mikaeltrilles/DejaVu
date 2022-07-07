CREATE TABLE IF NOT EXISTS filmtable(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    titre_film TEXT, 
    note_film TEXT
);
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (1, 'Avengers : Endgame', '8.3');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (2, 'Lucy', '6.4');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (3, 'Léon', '8.3');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (4, 'Inception', '8.4');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (5, 'Interstellar', '8.4');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (6, 'Le Cinquème Element', '7.5');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (7, 'Pulp Fiction', '8.5');
INSERT or IGNORE INTO filmtable(id, titre_film, note_film) VALUES (8, 'Reservoir dofs', '8.1');