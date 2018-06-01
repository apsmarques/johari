import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Quest } from '../../models/quest';

import { QuestsService } from '../../services/quests';

interface SubQuest {
  Titulo: string;
  Valor:number;
}

@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  quests: Quest[] = []
  constructor(public navCtrl: NavController, public questSrv: QuestsService) {


  }

  ionViewDidLoad() {
    //this.quests = { ... this.questSrv.quests}; 
    let quest: Quest;
    let subquest = {} as SubQuest;
    for (let key in this.questSrv.quests) {
      quest = new Quest('', []);
     
      //key = Pergunta
      for (let key2 in this.questSrv.quests[key]) {
        if (key2 == "Titulo") {
          quest.Titulo = this.questSrv.quests[key][key2];
        } else {
          for (let key3 in this.questSrv.quests[key][key2]) {
            for (let key4 in this.questSrv.quests[key][key2][key3]) {
              if (key4 == "Titulo") {
                subquest.Titulo = this.questSrv.quests[key][key2][key3][key4];      
                subquest.Valor = 0;         
                quest.subQuest.push(subquest);
              } 
              
            }
          }
        }
      }
      
      this.quests.push(quest);

    }
    
  }

}
