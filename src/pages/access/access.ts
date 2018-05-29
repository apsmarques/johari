import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";
import { IonicPage, LoadingController, AlertController } from 'ionic-angular';
import { AuthService } from "../../services/auth";
import { UserService } from "../../services/user";


@IonicPage()
@Component({
  selector: 'page-access',
  templateUrl: 'access.html',
})
export class AccessPage {

  constructor(private authService: AuthService,
              private loadingCtrl: LoadingController,
              private alertCtrl: AlertController,
              private usrServ: UserService) {
  }

 

  onAccess(form: NgForm){
     const loading = this.loadingCtrl.create({
      content: 'Aguarde por favor...'
    });
    loading.present();
    //forçar uma autenticação sempre com a mesma senha para todos. Se já existir o email, ele tenta logar.
    //Se for primeira vez, loga em seguida
    this.authService.signup(form.value.email, '123456')
      .then(data => {
        this.authService.signin(form.value.email, '123456')
                .then(data => {
                  loading.dismiss();
                })
                .catch(error => {
                  loading.dismiss();
                  console.log(error);
                  const alert = this.alertCtrl.create({
                    title: 'Falha no login!',
                    message:  this.authService.msgErro(error.code),
                    buttons: ['Ok']
                  });
                  alert.present();
                });
      })
      .catch(error => {
        if (error.code=="auth/email-already-in-use"){
            this.authService.signin(form.value.email, '123456')
                .then(data => {
                  loading.dismiss();
                })
                .catch(error => {
                  loading.dismiss();
                  console.log(error);
                  const alert = this.alertCtrl.create({
                    title: 'Falha no login!',
                    message:  this.authService.msgErro(error.code),
                    buttons: ['Ok']
                  });
                  alert.present();
                });
        } else {
          loading.dismiss();
          console.log(error);
          const alert = this.alertCtrl.create({
            title: 'Ocorreu um erro!',
            message: 'Desculpe, ocorreu um erro desconhecido no aplicativo, tente novamente mais tarde.',
            buttons: ['Ok']
          });
           alert.present();
        }
      });
  }

}
