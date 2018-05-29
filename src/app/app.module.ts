import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { InputMask } from '../directives/InputMask';
import { MyApp } from './app.component';
import { AccessPage } from '../pages/access/access';
import { DescriptionPage } from '../pages/description/description';
import { AboutPage } from '../pages/about/about';
import { FaqPage } from '../pages/faq/faq';
import { SurveyPage } from '../pages/survey/survey';
import { GraphicPage } from '../pages/graphic/graphic';
import { UserService } from "../services/user";
import { AuthService } from "../services/auth";



@NgModule({
  declarations: [
    MyApp,
    InputMask,
    AccessPage,
    DescriptionPage,
    AboutPage,
    FaqPage,
    SurveyPage,
    GraphicPage
  ],
  imports: [
    BrowserModule,    
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AccessPage,
    DescriptionPage,
    AboutPage,
    FaqPage,
    SurveyPage,
    GraphicPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    UserService,
    AuthService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
