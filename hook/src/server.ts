import { createServer } from 'http';

import app from './config/express';

class AppServer {
  static init() {
    const port = process.env.PORT || 3005;
    const server = createServer(app);

    server.listen(port, () => {
      console.log(
        `API server started in port: ${port}, ready for connections!`,
      );
    });
  }
}

AppServer.init();
