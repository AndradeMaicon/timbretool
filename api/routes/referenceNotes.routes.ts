import { Router } from 'express';

import ReferenceNotesRepository from '../repositories/ReferenceNotesRepository'

const referenceNotesRouter = Router();
const referenceNotesReposytory = new ReferenceNotesRepository();

referenceNotesRouter.get('/:id', (request, response) => {
  const { id } = request.params
  
  const references = referenceNotesReposytory.selectNote(id);

  references;

  console.log(references)

  return response.json(references)
});

export default referenceNotesRouter;