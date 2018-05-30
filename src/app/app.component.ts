import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';

import { AuthService } from "../services/auth";
import firebase from 'firebase';

import { DescriptionPage } from '../pages/description/description';
import { AccessPage } from '../pages/access/access';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';






@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AccessPage;
  accessPage = AccessPage;
  descriptionPage = DescriptionPage;
  isAuthenticated = false; 

 @ViewChild('nav') nav: NavController;

  constructor(private platform: Platform,              
              private authService: AuthService) {
    firebase.initializeApp({ 
        apiKey: "AIzaSyA64Rp7oJLe3okXnFS7fvPDgZvm1CDkot0",
        authDomain: "johar-cee37.firebaseapp.com",
        databaseURL: "https://johar-cee37.firebaseio.com",
        projectId: "johar-cee37",
        storageBucket: "johar-cee37.appspot.com",
        messagingSenderId: "275707525262"
      })

    firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.isAuthenticated = true;          
          this.nav.setRoot(this.descriptionPage);          
        } else {
          this.isAuthenticated = false;                   
        }
      });  
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //statusBar.styleDefault();
      //splashScreen.hide();
      this.platform.pause.subscribe(() => {        
          this.authService.logout();
      });  
      this.platform.resume.subscribe(() => {      
          this.authService.logout();
      });
    
    });
    
  }

   
}

