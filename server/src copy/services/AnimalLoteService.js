
import { AnimalLoteRepository } from '../repositorys/AnimalLoteRepository.js';

const AnimalLoteService = {};

AnimalLoteService.findAll = async () => {
    const allLotes = await AnimalLoteRepository.findAll();
    return allLotes;
};

AnimalLoteService.create = async ( 
    id_animal, 
    id_lote, 
    ic_bezerro,
    ) => {
    const dt_entrada = new Date();

    const dt_saida = new Date();

    const dt_ultima_movimentacao = new Date();
        
    console.log(id_animal) 
    console.log(id_lote) 
    console.log(dt_entrada)
    console.log(dt_saida)
    console.log(dt_ultima_movimentacao)
    console.log(ic_bezerro)

    const loteCreated = await AnimalLoteRepository.create(
        id_animal, 
        id_lote, 
        dt_entrada,
        dt_saida,
        dt_ultima_movimentacao,
        ic_bezerro,
    )
    return loteCreated;
}

AnimalLoteService.update = async (AnimalLoteUp, id) => {
    const AnimalLoteUpdated = await AnimalLoteRepository.update(AnimalLoteUp, id);
    return AnimalLoteUpdated;
}

AnimalLoteService.delete = async (id) => {
    const loteDeleted = await AnimalLoteRepository.delete(id);
    return loteDeleted;
}

export { AnimalLoteService }