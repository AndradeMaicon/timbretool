import express from 'express';
// import { Router } from 'express';

const app = express();
// const routes = Router();

app.use(express.json());

app.get('/:id', (req, res) => {
  const { id } = req.params

  const guitarStrings = {
    e: '1',
    B: '2',
    G: '3',
    D: '4',
    A: '5',
    E: '6',
  }

  switch (id) {
    case guitarStrings.B:
      res.json({ message: 'Corda B' });
      break;
    case guitarStrings.G:
      res.json({ message: 'Corda G' });
      break;
    case guitarStrings.D:
      res.json({ message: 'Corda D' });
      break;
    case guitarStrings.A:
      res.json({ message: 'Corda A' });
      break;
    case guitarStrings.E:
      res.json({ message: 'Corda E' });
      break;
    default:
      res.json({ message: 'Corda e' });
  }
   
})

app.listen(3000);