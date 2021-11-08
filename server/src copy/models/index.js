import pkg from 'sequelize';
const { Sequelize, Model, DataTypes } = pkg;

const sequelize = new Sequelize('crud_sequelize', 'root', 'example', {
    host: 'localhost',
    dialect: 'mysql'
  });

export { sequelize };