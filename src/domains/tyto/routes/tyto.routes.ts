import { Router } from 'express';

import TytoController from '../controllers/tyto.controller';

const routes = Router();

routes.post('/', TytoController.saveData);

export default routes;
