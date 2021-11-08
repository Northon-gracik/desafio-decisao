import pkg from 'sequelize';
import { sequelize } from './index.js';

const { Model, DataTypes } = pkg;

class Lote extends Model { };

Lote.init({
    no_lote: DataTypes.STRING,
    ds_lote: DataTypes.STRING,
        
}, { sequelize, modelName: 'Lote' });

export { Lote };