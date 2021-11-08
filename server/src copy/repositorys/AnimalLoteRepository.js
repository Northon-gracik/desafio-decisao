import { AnimalLote } from "../models/AnimalLote.js"

const AnimalLoteRepository = {};

AnimalLoteRepository.findAll = async () => { 
    const allLotes = await AnimalLote.findAll();
    return allLotes;
};

AnimalLoteRepository.create = async ( 
        AnimalId, 
        LoteId, 
        dt_entrada,
        dt_saida,
        dt_ultima_movimentacao,
        ic_bezerro,
    ) => { 
    const LoteCreated = await AnimalLote.create({
        dt_entrada,
        dt_saida,
        dt_ultima_movimentacao,
        ic_bezerro,
        AnimalId, 
        LoteId, 
    });
    return LoteCreated;
};

AnimalLoteRepository.update = async (animalLote, id) => { 
    return AnimalLote.update(animalLote, {
        where: {id}
      });
};

AnimalLoteRepository.delete = async (id) => { 
    return AnimalLote.destroy({
        where: {id}
    });
};

export { AnimalLoteRepository };