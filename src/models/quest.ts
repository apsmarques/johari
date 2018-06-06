interface SubQuest {
    Titulo: string;
    Valor:number;
}

export class Quest {
  constructor(public id:number,public Titulo: string, public subQuest: SubQuest[]) {}
}
