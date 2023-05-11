import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static("frontend"));

app.use("/resgister", )