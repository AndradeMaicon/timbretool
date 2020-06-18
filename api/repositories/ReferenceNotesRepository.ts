class ReferenceNotesRepository {
  

  public selectNote(id : string ) {
    const guitarStrings = {
      e: '1',
      B: '2',
      G: '3',
      D: '4',
      A: '5',
      E: '6',
    }

    let note: {};
  
    switch(id) {
        case guitarStrings.B:
          note = { message: 'Corda B' };
          break;
        case guitarStrings.G:
          note = { message: 'Corda G' };
          break;
        case guitarStrings.D:
          note = { message: 'Corda D' };
          break;
        case guitarStrings.A:
          note = { message: 'Corda A' };
          break;
        case guitarStrings.E:
          note = { message: 'Corda E' };
          break;
        default:
          note = { message: 'Corda e' };
    }

    return note
  }
      
}

export default ReferenceNotesRepository;

