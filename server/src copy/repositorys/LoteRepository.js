import { Lote } from "../models/Lote.js"

const LoteRepository = {};

LoteRepository.findAll = async () => { 
    const allLotes = await Lote.findAll();
    return allLotes;
};

LoteRepository.findByName = async (no_lote) => { 
    const lote = await Lote.findOne({atribute:[no_lote], where: {no_lote}});
    return lote;
};

LoteRepository.create = async (
    no_lote,
    ds_lote
    ) => { 
        console.log("Repository");
    const LoteCreated = await Lote.create({
        no_lote,
        ds_lote
    });
    return LoteCreated;
};

LoteRepository.update = async (lote, id) => { 
    return Lote.update(lote, {
        where: {id}
      });
};

LoteRepository.delete = async (id) => { 
    return Lote.destroy({
        where: {id}
    });
};



export { LoteRepository };