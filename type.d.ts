type Adherent = {
    id?: string;
    pseudo: string;
    nom: string;
    prenoms: string;
    genre: string;
    adresse: {
      rue: string;
      ville: string;
      codePostal: string;
      numeroTelephone: string | null;
    };
    dateInscription?: Date;
    nombreEmpruntEnCours?: number;
  }
  
  type adherentState = {
    adherentList: Adherent[];
    sheetState: boolean
  };
  type actionType = {
    type: string;
    payload: any;
  };
  
  type stateType = {
    adherent: adherentState
  }