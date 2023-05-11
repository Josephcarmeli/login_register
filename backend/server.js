import express from 'express';
import pg from 'pg';
import router from './routes.js';
import cors from 'cors';

const server = express();
server.use(cors());
server.use(express.json());
server.use('/api', router);


const port = 3001;
export const pool = new pg.Pool({
  user: 'joseph',
  password: '123',
  database: 'users'
});



server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

export default pool;