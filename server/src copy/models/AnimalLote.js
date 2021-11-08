import pkg from 'sequelize';

import { sequelize } from './index.js';
import { Animal } from './Animal.js' 
import { Lote } from './Lote.js'

const { Model, DataTypes } = pkg;

class AnimalLote extends Model { };

AnimalLote.init({
    dt_entrada: DataTypes.DATE,
    dt_saida: DataTypes.DATE,
    dt_ultima_movimentacao: DataTypes.DATE,
    ic_bezerro: DataTypes.BOOLEAN,
}, { sequelize, modelName: 'AnimalLote' });

AnimalLote.Animal = AnimalLote.belongsTo(Animal);

AnimalLote.Lote = AnimalLote.belongsTo(Lote);

export { AnimalLote };