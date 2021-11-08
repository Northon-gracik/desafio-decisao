import { Router } from "express";

import { atividadeController } from "./controller/atividade.js"

const router = Router();

router.get('/list-atividade', atividadeController.findAll);

router.post('/create-atividade', atividadeController.create);

router.put('/finaly-atividade', atividadeController.finaly);

router.delete('/delete-atividade/:id', atividadeController.delete);

export { router };