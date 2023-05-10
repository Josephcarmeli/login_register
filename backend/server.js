import express from 'express';
import pg from 'pg';

const server = express();
server.use(express.json());

const port = 3001;
const pool = new pg.Pool({
  user: 'joseph',
  password: '123',
  database: 'users'
});


server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
