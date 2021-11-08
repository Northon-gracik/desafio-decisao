import { PessoaService } from "../services/PessoaService.js"

const PessoaController = {};

PessoaController.get = async (req, res) => {
    try {
        const allPessoas = await PessoaService.findAll();
        res.status(200).json(allPessoas);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};
PessoaController.getByEmail = async (req, res) => {
    try {
        const { no_email } = req.query;
        console.log(no_email);
        const pessoa = await PessoaService.findByEmail(no_email);
        res.status(200).json(pessoa);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};


PessoaController.create = async (req, res) => {
    try {
        const { no_pessoa,
            no_email,
            endereco,
            sexo,
            ic_ativo } = req.body;
            const pessoa = await PessoaService.create( no_pessoa, no_email, endereco, sexo, ic_ativo );
        res.status(200).json(pessoa);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

PessoaController.update = async (req, res) => {
    try {
        const { pessoaUp, no_email } = req.body;
        const pessoa = await PessoaService.update(pessoaUp, no_email);
        res.status(200).json(pessoa);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};

PessoaController.delete = async (req, res) => {
    try {
        const { no_email } = req.body;
        const pessoa = await PessoaService.delete(no_email);
        res.status(200).json(pessoa);
    }catch(err) {
        res.status(400).json({ "error": err })
    }
};



export { PessoaController };