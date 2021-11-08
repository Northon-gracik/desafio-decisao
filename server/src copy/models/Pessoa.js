import pkg from 'sequelize';
import { sequelize } from './index.js';

const { Model, DataTypes } = pkg;

class Pessoa extends Model { };

Pessoa.init({
    no_pessoa: DataTypes.STRING,
    no_email: DataTypes.STRING,
    endereco: DataTypes.STRING,
    sexo: DataTypes.CHAR,
    ic_ativo: DataTypes.BOOLEAN,
}, { sequelize, modelName: 'Pessoa' });

export { Pessoa };