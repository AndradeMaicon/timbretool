import express from 'express';
// import { Router } from 'express';

const app = express();
// const routes = Router();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Foi'})
})

app.listen(3000);