import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quest } from '../../models/quest';
import { AuthService } from "../../services/auth";


@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  quests : Quest[] = []
  constructor(public navCtrl: NavController) {
    
        
  }

  ionViewDidLoad() {
                      
  }

}
