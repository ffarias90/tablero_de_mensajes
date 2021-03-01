const Sequelize = require('sequelize');
// traemos el constructor de cada modelo
//const QuoteModel = require('./models/quote');

// creamos la conexion a la base de datos
const sql = new Sequelize('tablero_de_mensajes', 'root', '1234', {
    host: 'localhost',
    dialect: 'mysql'
});

// aca inicializamos los modelos (tablas)
const Message = sql.define('Message', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    author: {
        type: Sequelize.STRING,
        allowNull: false
    },
    message: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, { timestamps: true });


// sincronizamos nuestro codigo con la base de datos
sql.sync()
    .then(() => {
        console.log('tablas creadas, conectado a la base de datos');
    });

// finalmente listamos los modelos que queremos exportar    
module.exports = {
    Message,
};