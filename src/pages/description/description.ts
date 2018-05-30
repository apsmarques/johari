import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { SurveyPage } from '../survey/survey';
import { GraphicPage } from '../graphic/graphic';
import { AuthService } from "../../services/auth";


@IonicPage()
@Component({
  selector: 'page-description',
  templateUrl: 'description.html',
})
export class DescriptionPage {
  aboutPage = AboutPage;
  faqPage = FaqPage;
  surveyPage = SurveyPage;
  graphicPage = GraphicPage;
  

  constructor(public navCtrl: NavController,private authService: AuthService) {
  }

  onLoad(page: any) {
    this.navCtrl.push(page);
    this.authService.logout();;
  }

}
