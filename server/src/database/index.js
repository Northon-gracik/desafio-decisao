import pkg from 'sequelize';
const { Sequelize } = pkg;

const sequelize = new Sequelize('crud_sequelize', 'postgres', 'example', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
  });

export { sequelize };