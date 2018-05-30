import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quest } from '../../models/quest';
@IonicPage()
@Component({
  selector: 'page-survey',
  templateUrl: 'survey.html',
})
export class SurveyPage {
  quests : Quest[] = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewWillLoad() {
    this.quests = [];
    let sub = [{Titulo: "Relaciono-me aberta e francamente com os outros membros do grupo.", valor:0},
               {Titulo:"Muitas vezes costumo fechar-me , acautelar-me e retrair-me.",valor:0}];
    
    this.quests.push(new Quest("Ao relacionar-me com os outros em um grupo:",sub));
  }

}
