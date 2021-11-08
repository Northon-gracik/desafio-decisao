import pkg from 'sequelize';
import { sequelize } from './index.js';
import { Pessoa } from './Pessoa.js';

const { Model, DataTypes } = pkg;

class Animal extends Model { };

Animal.init({
    no_animal: DataTypes.STRING,
    no_raca: DataTypes.STRING,
    id_fazenda: DataTypes.UUID,
    sexo: DataTypes.CHAR,
    vr_peso: DataTypes.DOUBLE,
    dt_nascimento: DataTypes.DATE
}, { sequelize, modelName: 'Animal' });

Animal.Pessoa = Animal.belongsTo(Pessoa);

export { Animal };
