import { Http, Response } from "@angular/http";
import { AuthService } from "../services/auth";
import { UserInfo } from "../models/userInfo";
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

import { Injectable } from "@angular/core";

@Injectable()
export class UserService {
  private user: UserInfo;

  constructor(private http: Http, private authService: AuthService) {
  }

  setaDadosUsuario(dados: UserInfo){
      this.user = { ...dados };
  }

  incluiDados(token: string) {
    const userId = this.authService.getActiveUser().uid;
    return this.http
      .put('https://johar-cee37.firebaseio.com' + userId + '/userInfo.json?auth=' + token, this.user)
      .map((response: Response) => {
        return response.json();
      });
  }

}