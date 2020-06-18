import { Router } from 'express';
import referenceNotes from './referenceNotes.routes';

const routes = Router();

routes.use('/', referenceNotes);

export default routes;