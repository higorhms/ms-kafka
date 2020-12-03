import { Router } from 'express';
import Container from 'typedi';

import TytoController from '../controllers/tyto.controller';

const routes = Router();
const tytoController = Container.get(TytoController);

routes.post('/visits/hook', tytoController.saveData);

export default routes;
