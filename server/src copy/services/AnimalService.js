
import { AnimalRepository } from '../repositorys/AnimalRepository.js';

const AnimalService = {};

AnimalService.findAll = async () => {
    const allAnimals = await AnimalRepository.findAll();
    return allAnimals;
};

AnimalService.findByName = async (name) => {
    if(!name) throw new Error('Name invalid');
    const Animal = await AnimalRepository.findByName(name);
    if(!Animal) throw new Error('Animal not found');
    return Animal;
};

AnimalService.create = async ( 
    no_animal,
    no_raca,
    id_fazenda,
    sexo,
    vr_peso,
    nascimento,
    id_pessoa
) => {
    const animal = await AnimalRepository.findByName(no_animal);
    if(animal) throw new Error('Animal already exist');
    const dt_nascimento = new Date(nascimento);
    const AnimalCreated = await AnimalRepository.create(
        no_animal,
        no_raca,
        id_fazenda,
        sexo,
        vr_peso,
        dt_nascimento,
        id_pessoa
    );
    return AnimalCreated;
}

AnimalService.update = async (AnimalUp, no_animal) => {
    const animal = await AnimalRepository.findByName(no_animal);
    if(!animal) throw new Error('Animal not exist');
    console.log(animal);
    const animalUpdated = await AnimalRepository.update(AnimalUp, animal.id);
    return animalUpdated;
}

AnimalService.delete = async (no_animal) => {
    const animal = await AnimalRepository.findByName(no_animal);
    if(!animal) throw new Error('Animal not exist');
    const animalDeleted = await AnimalRepository.delete(animal.id);
    return animalDeleted;
}

export { AnimalService }