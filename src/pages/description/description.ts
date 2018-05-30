import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { AboutPage } from '../about/about';
import { FaqPage } from '../faq/faq';
import { SurveyPage } from '../survey/survey';
import { GraphicPage } from '../graphic/graphic';
import { AuthService } from "../../services/auth";
import { QuestsService } from '../../services/quests';

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
  

  constructor(public navCtrl: NavController,public questSrv:QuestsService,private authService: AuthService) {
    this.authService.getActiveUser().getToken()
                  .then(
                    (token: string) => {
                      this.questSrv.getDados(token)
                        .subscribe(data=>console.log(data));                        
                    })
  }

  onLoad(page: any) {
    this.navCtrl.push(page);
    this.authService.logout();;
  }

}
