import express from 'express';
import routes from '../routes';

const app = express();
// const routes = Router();

app.use(express.json());
app.use(routes)

app.listen(3000, () => {
  console.log('Server start')
});