import { AnimalLoteService } from "../services/AnimalLoteService.js"

const AnimalLoteController = {};

AnimalLoteController.get = async (req, res) => {
    try {
        const allAnimalLotes = await AnimalLoteService.findAll();
        res.status(200).json(allAnimalLotes);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

AnimalLoteController.create = async (req, res) => {
    try {
        const { AnimalId,
            LoteId,
            ic_bezerro } = req.body;
        const AnimalLote = await AnimalLoteService.create(AnimalId, LoteId, ic_bezerro);
        res.status(200).json(AnimalLote);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

AnimalLoteController.update = async (req, res) => {
    try {
        const {loteUp, id } = req.body;
        const AnimalLote = await AnimalLoteService.update(loteUp, id);
        res.status(200).json(AnimalLote);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

AnimalLoteController.delete = async (req, res) => {
    try {
        const { id } = req.body;
        const AnimalLote = await AnimalLoteService.delete(id);
        res.status(200).json(AnimalLote);
        res.status(200).json({});
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};



export { AnimalLoteController };