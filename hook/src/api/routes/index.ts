import { Request, Response, Router } from 'express';

import tytoRoutes from '../../domains/tyto/routes/tyto.routes';

const routes = Router();

routes.get('/', (_: Request, response: Response) => {
  response.json({ message: 'Running ' });
});

routes.use(tytoRoutes);

export default routes;
