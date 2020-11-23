import { Router } from 'express';

import TytoController from '../controllers/tyto.controller';

const routes = Router();

routes.post('/visits/hook', TytoController.saveData);

export default routes;
