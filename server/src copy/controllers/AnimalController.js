import { AnimalService } from "../services/AnimalService.js"

const AnimalController = {};

AnimalController.get = async (req, res) => {
    try {
        const allAnimals = await AnimalService.findAll();
        res.status(200).json(allAnimals);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};
AnimalController.getByName = async (req, res) => {
    try {
        const { no_animal } = req.query;
        const animal = await AnimalService.findByName(no_animal);
        res.status(200).json(animal);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};
AnimalController.create = async (req, res) => {
    try {
        const { 
            no_animal,
            no_raca,
            id_fazenda,
            sexo,
            vr_peso,
            dt_nascimento,
            PessoaId } = req.body;
        const animal = await AnimalService.create( no_animal, no_raca, id_fazenda, sexo, vr_peso, dt_nascimento, PessoaId);
        res.status(200).json(animal);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

AnimalController.update = async (req, res) => {
    try {
        const {animalUp, no_animal } = req.body;
        const animal = await AnimalService.update(animalUp, no_animal);
        res.status(200).json(animal);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

AnimalController.delete = async (req, res) => {
    try {
        const { no_animal } = req.body;
        const animal = await AnimalService.delete(no_animal);
        res.status(200).json(animal);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};



export { AnimalController };