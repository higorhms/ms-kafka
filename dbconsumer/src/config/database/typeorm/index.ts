/* eslint-disable no-console */
import path from 'path';
import { createConnection } from 'typeorm';

import ENV from '../../env/env-config';

export default createConnection({
  name: 'mongo',
  type: 'mongodb',
  host: ENV.mongodb.host,
  port: ENV.mongodb.port,
  database: ENV.mongodb.database,
  useUnifiedTopology: true,
  entities: [path.resolve(__dirname, 'schemas', '*{.js,.ts}')],
}).then(() => {
  console.log('🚀 - Database was sucessfully connected');
});
