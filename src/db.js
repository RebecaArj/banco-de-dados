const { Sequelize } = require('sequelize');

const dbSequelize = new Sequelize('rebequinha', 'root', 'aluno.ifal22', {
    dialect: 'mysql', host: 'localhost'
});

//const dbSequelize = new Sequelize(process.env.DATABASE_URL);

module.exports = dbSequelize;