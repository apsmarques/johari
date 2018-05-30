import { Http, Response } from "@angular/http";
import { AuthService } from "../services/auth";
import { Quest } from "../models/quest";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Injectable } from "@angular/core";

@Injectable()
export class QuestsService {
  private quests: Quest[] = [] ;

  constructor(private http: Http, private authService: AuthService) {
  }

  
  getDados(token: string) {
    const userId = this.authService.getActiveUser().uid;
    
    return this.http
      .get('https://johar-cee37.firebaseio.com/Questionario.json?auth=' + token)
      .map((response: Response) => {
        return response.json();
      });
  }

}