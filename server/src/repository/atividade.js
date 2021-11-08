import { Atividade } from "../model/atividade.js";

const atividadeRepository = {};

atividadeRepository.findAll = async () => {
    const all = await Atividade.findAll();
    return all;
};

atividadeRepository.findById = async id => {
    const one = await Atividade.findByPk( id );
    return one;
};

atividadeRepository.create = async (
    descricao,
    data_criacao
) => {
    const created = await Atividade.create({
        descricao,
        concluido: false,
        data_criacao
    });
    return created;
};

atividadeRepository.update = async (atividade, id) => {
    const updated = await Atividade.update(atividade, {
        where: { id }
    });
    return updated;
}

atividadeRepository.delete = async id => {
    const deleted = await Atividade.destroy({
        where: { id }
    });
    return deleted;
}

export { atividadeRepository };