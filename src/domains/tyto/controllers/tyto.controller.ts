import { Request, Response } from 'express';

import TytoService from '../services/tyto.service';

class TytoController {
  async saveData(request: Request, response: Response) {
    const data = request.body;

    const service = new TytoService();

    const resp = await service.execute(data);

    response.json(resp);
  }
}

export default new TytoController();
