import { Http, Response } from "@angular/http";
import { Quest } from "../models/quest";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Injectable } from "@angular/core";

@Injectable()
export class QuestsService {
  public quests: Quest[] = [] ;

  constructor(private http: Http) {
  }

  
  getDados(token: string) {
    
    
    return this.http
      .get('https://johari-8ab7d.firebaseio.com/Questionario.json?auth=' + token)
      .map((response: Response) => {
        this.quests = {... response.json()};
      });
  }

}