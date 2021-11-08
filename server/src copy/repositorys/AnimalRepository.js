import { Animal } from "../models/Animal.js"

const AnimalRepository = {};

AnimalRepository.findAll = async () => { 
    const allAnimals = await Animal.findAll();
    return allAnimals;
};

AnimalRepository.findByName = async (no_animal) => { 
    const animal = await Animal.findOne({atribute:[no_animal], where:{no_animal}});
    return animal;
};

AnimalRepository.create = async (
        no_animal,
        no_raca,
        id_fazenda,
        sexo,
        vr_peso,
        dt_nascimento,
        PessoaId
    ) => { 
    const AnimalCreated = await Animal.create({
        no_animal,
        no_raca,
        id_fazenda,
        sexo,
        vr_peso,
        dt_nascimento,
        PessoaId
    });
    return AnimalCreated;
};

AnimalRepository.update = async (animal, id) => { 
    console.log(animal);
    return Animal.update(animal, {
        where: {id}
      });
};

AnimalRepository.delete = async (id) => { 
    return Animal.destroy({
        where: {id}
    });
};

export { AnimalRepository };