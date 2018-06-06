import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Quest } from '../../models/quest';

import { QuestsService } from '../../services/quests';
import { GraphicPage } from '../graphic/graphic';


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
    let vlrX:number = 0;
    let vlrY:number = 0;
    for(var i=0;i<this.quests.length-1;i++) {
      for (var j=0;j<this.quests[i].subQuest.length-1;j++){
         if (j==0) {
          vlrX += this.quests[i].subQuest[j].Valor;
         }else {
          vlrY += this.quests[i].subQuest[j].Valor;
         }
      }
    }
    vlrX = vlrX/20;
    vlrY = vlrY/20;
    console.log('vlrX s: '+vlrX);
    console.log('vlrY s: '+vlrY);
    this.navCtrl.push(GraphicPage,{x:vlrX,y:vlrY});
  }

  

  ionViewDidLoad() {
    //this.quests = { ... this.questSrv.quests}; 
    let quest: Quest;
     

    for (let key in this.questSrv.quests) {
      quest = new Quest(0,'', []);
      
      //key == Pergunta
      for (let key2 in this.questSrv.quests[key]) {
        if (key2 == "Titulo") {
          quest.Titulo = this.questSrv.quests[key][key2];
        } else if (key2 == "id") {
          quest.id = this.questSrv.quests[key][key2];
        }
        else {
          for (let key3 in this.questSrv.quests[key][key2]) {
            for (let key4 in this.questSrv.quests[key][key2][key3]) {
              if (key4 == "Titulo") {
                let subq = {Titulo:this.questSrv.quests[key][key2][key3][key4],Valor:0};
                    
                quest.subQuest.push(subq);
              } 
              
            }
          }
        }
      }
      
      this.quests.push(quest);

    }
   
    
  }

}
