
import { LoteRepository } from '../repositorys/LoteRepository.js';

const LoteService = {};

LoteService.findAll = async () => {
    const allLotes = await LoteRepository.findAll();
    return allLotes;
};

LoteService.findByName = async (no_lote) => {
    if(!no_lote) throw new Error('Name invalid');
    const lote = await LoteRepository.findByName(no_lote);
    if(!lote) throw new Error('Lote not found');
    return lote;
};

LoteService.create = async ( 
        no_lote,
        ds_lote
    ) => {
        console.log("Service");
    const lote = await LoteRepository.findByName(no_lote);
    console.log('lote');
    if(lote) throw new Error('Lote already exist');
    const loteCreated = await LoteRepository.create(
        no_lote,
        ds_lote
    )
    return loteCreated;
}

LoteService.update = async (loteUp, no_lote) => {
    const lote = await LoteRepository.findByName(no_lote);
    if(!lote) throw new Error('lote not exist');
    const loteUpdated = await LoteRepository.update(loteUp, lote.id);
    return loteUpdated;
}

LoteService.delete = async (no_lote) => {
    const lote = await LoteRepository.findByName(no_lote);
    console.log(lote);
    if(!lote) throw new Error('Lote not exist');
    const loteDeleted = await LoteRepository.delete(lote.id);
    return loteDeleted;
}

export { LoteService }