import { LoteService } from "../services/LoteService.js"

const LoteController = {};

LoteController.get = async (req, res) => {
    try {
        const allLotes = await LoteService.findAll();
        res.status(200).json(allLotes);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};
LoteController.getByName = async (req, res) => {
    try {
        const { no_lote } = req.query;
        const lote = await LoteService.findByName(no_lote);
        res.status(200).json(lote);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};
LoteController. create = async (req, res) => {
    try {
        const { no_lote, ds_lote } = req.body;
        const lote = await LoteService.create(no_lote, ds_lote);
        res.status(200).json(lote);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

LoteController.update = async (req, res) => {
    try {
        const {loteUp, no_lote } = req.body;
        const lote = await LoteService.update(loteUp, no_lote);
        res.status(200).json(lote);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

LoteController.delete = async (req, res) => {
    try {
        const { no_lote } = req.body;
        const lote = await LoteService.delete(no_lote);
        res.status(200).json(lote);
        res.status(200).json({});
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};



export { LoteController };