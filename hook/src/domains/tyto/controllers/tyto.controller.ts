import { Request, Response } from 'express';
import Container from 'typedi';

import TytoService from '../services/tyto.service';

class TytoController {
  async saveData(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const service = Container.get(TytoService);

    const resp = await service.execute(data);

    return response.json(resp);
  }
}

export default TytoController;
