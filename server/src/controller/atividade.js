import { atividadeService } from '../service/atividade.js'

const atividadeController = {};

atividadeController.findAll = async (req, res) => {
    try {
        const service = await atividadeService.findAll();
        res.status(200).json(service);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
}

atividadeController.create = async (req, res) =>{ 
    try {
        const { descricao } = req.body;
        const service = await atividadeService.create(descricao);
        res.status(200).json(service);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
}

atividadeController.finaly = async (req, res) =>{ 
    try {
        const { id } = req.body;
        const service = await atividadeService.finaly(id);
        res.status(200).json(service);
    }catch(err) {
        console.log(err);
        res.status(400).json({ "error": err })
    }
}

atividadeController.delete = async (req, res) =>{ 
    try {
        const { id } = req.params;
        const service = await atividadeService.delete(id);
        res.status(200).json(service);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
}

export { atividadeController };