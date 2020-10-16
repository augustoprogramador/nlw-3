const Database = require('sqlite-async')

// Database.open(__dirname + '/database.sqlite').then(execute) // linha usada na criação do banco

function execute(db) {
    // console.log('entrei na função')
    return db.exec(`
        CREATE TABLE IF NOT EXISTS orphanages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            lat TEXT,
            lng TEXT,
            name TEXT,
            about TEXT,
            whatsapp TEXT,
            images TEXT,
            instructions TEXT,
            opening_hours TEXT,
            open_on_weekends TEXT
        );
    `) // sem o return, criou a tabela, agora com o return está retornando a tabela
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute) // db