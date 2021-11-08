import { Router } from "express";

import { PessoaController } from "./controllers/PessoaController.js";
import { AnimalController } from "./controllers/AnimalController.js";
import { LoteController } from "./controllers/LoteController.js";
import { AnimalLoteController } from "./controllers/AnimalLoteController.js";

const router = Router();

//Pessoas
router.get('/all-pessoas', PessoaController.get);

router.get('/pessoa-email', PessoaController.getByEmail);

router.post('/create-pessoa', PessoaController.create);

router.put('/update-pessoa', PessoaController.update);

router.delete('/delete-pessoa', PessoaController.delete);

// //Animais
router.get('/all-animais', AnimalController.get);

router.get('/animal-nome', AnimalController.getByName);

router.post('/create-animal', AnimalController.create);

router.put('/update-animal', AnimalController.update);

router.delete('/delete-animal', AnimalController.delete);

// //Lote
router.get('/all-lotes', LoteController.get);

router.get('/lote-nome', LoteController.getByName);

router.post('/create-lote', LoteController.create);

router.put('/update-lote', LoteController.update);

router.delete('/delete-lote', LoteController.delete);

// //Animal Lote
router.get('/all-animal-lote', AnimalLoteController.get);

router.post('/create-animal-lote', AnimalLoteController.create);

router.put('/update-animal-lote', AnimalLoteController.update);

router.delete('/delete-animal-lote', AnimalLoteController.delete);


export { router };