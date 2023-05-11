import express from 'express';
import path from 'path';

export const app = express();
app.use(express.json());
app.use(express.static(path.resolve('frontend')));

app.get('*', (req, res) => {
  res.sendFile(path.resolve('frontend', 'index.html'));
});