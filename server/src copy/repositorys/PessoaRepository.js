import { Pessoa } from "../models/Pessoa.js"

const PessoaRepository = {};

PessoaRepository.findAll = async () => { 
    const allPessoas = await Pessoa.findAll();
    return allPessoas;
};

PessoaRepository.findByEmail = async (no_email) => { 
    const pessoa = await Pessoa.findOne({atribute:[no_email], where: {no_email}});
    return pessoa;
};

PessoaRepository.create = async (
        no_pessoa,
        no_email,
        endereco,
        sexo,
        ic_ativo
    ) => { 
    const pessoaCreated = await Pessoa.create({
        no_pessoa,
        no_email,
        endereco,
        sexo,
        ic_ativo
    });
    return pessoaCreated;
};

PessoaRepository.update = async (pessoa, id) => { 
    return Pessoa.update(pessoa, {
        where: {id}
      });
};

PessoaRepository.delete = async (id) => { 
    return Pessoa.destroy({
        where: {id}
    });
};



export { PessoaRepository };