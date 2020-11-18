import { Request, Response, Router } from 'express';

const routes = Router();

routes.get('/', (_: Request, response: Response) => {
  response.json({ message: 'Running ' });
});

export default routes;
