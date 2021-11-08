
import { PessoaRepository } from '../repositorys/PessoaRepository.js';

const PessoaService = {};

PessoaService.findAll = async () => {
    const allPessoas = await PessoaRepository.findAll();
    return allPessoas;
};

PessoaService.findByEmail = async (email) => {
    if(!email) throw new Error('Email invalid');
    const pessoa = await PessoaRepository.findByEmail(email);
    if(!pessoa) throw new Error('Pessoa not found');
    return pessoa;
};

PessoaService.create = async ( 
    no_pessoa,
    no_email,
    endereco,
    sexo,
    ic_ativo 
    ) => {   
    const pessoa = await PessoaRepository.findByEmail(no_email);
    if(pessoa) {
        console.log(pessoa);
        throw new Error('Pessoa already exist');
    }
    const pessoaCreated = await PessoaRepository.create(
        no_pessoa,
        no_email,
        endereco,
        sexo,
        ic_ativo
    );
    console.log(pessoaCreated);
    return pessoaCreated;
}

PessoaService.update = async (pessoaUp, no_email) => {
    const pessoa = await PessoaRepository.findByEmail(no_email);
    if(!pessoa) throw new Error('Pessoa not exist');
    const pessoaUpdated = await PessoaRepository.update(pessoaUp, pessoa.id);
    return pessoaUpdated;
}

PessoaService.delete = async (no_email) => {
    const pessoa = await PessoaService.findByEmail(no_email);
    if(!pessoa) throw new Error('Pessoa not exist');
    const pessoaDeleted = await PessoaRepository.delete(pessoa.id);
    return pessoaDeleted;
}

export { PessoaService }