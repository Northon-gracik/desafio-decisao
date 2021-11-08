import { atividadeRepository } from "../repository/atividade.js"

const atividadeService = {};

atividadeService.findAll = async () => await atividadeRepository.findAll();

atividadeService.create = async descricao => {
    const data_criacao = new Date();
    const created = await atividadeRepository.create( descricao, data_criacao );
    return created
};

atividadeService.finaly = async id => {
    const data = await atividadeRepository.findById( id );
    const att = data.dataValues;
    if ( att.concluido ) throw new Error('Atividade esta concluida');
    att.data_termino = new Date();
    att.concluido = true;
    const updated = await atividadeRepository.update(att, id);
    return updated;
}

atividadeService.delete = async id => await atividadeRepository.delete(id);

export { atividadeService };