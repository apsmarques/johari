interface SubQuest {
    Titulo: string;
    Valor:number;
}

export class Quest {
  constructor(public Titulo: string, public subQuest: SubQuest[]) {}
}
