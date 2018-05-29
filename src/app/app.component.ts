import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';

import { AuthService } from "../services/auth";
import firebase from 'firebase';

import { DescriptionPage } from '../pages/description/description';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { SurveyPage } from '../pages/survey/survey';
import { GraphicPage } from '../pages/graphic/graphic';
import { AccessPage } from '../pages/access/access';
//import { StatusBar } from '@ionic-native/status-bar';
//import { SplashScreen } from '@ionic-native/splash-screen';

import { Subscription} from 'rxjs/Subscription';




@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AccessPage;
  accessPage = AccessPage;
  descriptionPage = DescriptionPage;
  aboutPage = AboutPage;
  faqPage = FaqPage;
  surveyPage = SurveyPage;
  graphicPage = GraphicPage;
  isAuthenticated = false;
  resumeListener: Subscription = new Subscription();

 @ViewChild('nav') nav: NavController;

  constructor(private platform: Platform,
              private menuCtrl: MenuController,
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
          this.nav.setRoot(this.accessPage);          
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
          console.log('****UserdashboardPage RESUMED****');
      });
    
    });
    
  }

   onLoad(page: any) {
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
}

