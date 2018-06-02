import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Quest } from '../../models/quest';

import { QuestsService } from '../../services/quests';
import { GraphicPage } from '../graphic/graphic';

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
  quests: Quest[] = [];


  constructor(public navCtrl: NavController, public questSrv: QuestsService) {


  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  drawGraphic(){
    this.navCtrl.push(GraphicPage);
  }

  change(i:number,j:number){
     console.log("Valor:"+this.quests[i].subQuest[j].Valor)ç
  }

  ionViewDidLoad() {
    //this.quests = { ... this.questSrv.quests}; 
    let quest: Quest;
    

    for (let key in this.questSrv.quests) {
      quest = new Quest('', []);
     let subquest = {} as SubQuest; 
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
