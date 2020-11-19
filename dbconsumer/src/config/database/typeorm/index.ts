import { createConnection } from 'typeorm';

import ENV from '../../env/env-config';

export default createConnection({
  type: 'mongodb',
  host: ENV.mongodb.host,
  port: ENV.mongodb.port,
  database: ENV.mongodb.database,
}).then(() => {
  console.log('database was sucessfully connected');
});
