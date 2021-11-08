import pkg from 'sequelize';
import { sequelize } from '../database/index.js';

const { Model, DataTypes } = pkg;

class Atividade extends Model { };

Atividade.init({
    id:{ type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    descricao: { type: DataTypes.TEXT, allowNull: false},
    concluido: { type: DataTypes.BOOLEAN, allowNull: false},
    data_criacao: { type: DataTypes.DATE, allowNull: false },
    data_termino: { type: DataTypes.DATE },
}, { sequelize, modelName: 'Atividade' });

export { Atividade };
