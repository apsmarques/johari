interface SubQuest {
    Titulo: string;
    valor:number;
}

export class Quest {
  constructor(public Titulo: string, public subQuest: SubQuest[]) {}
}
