import { Component,ElementRef,ViewChild  } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the GraphicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-graphic',
  templateUrl: 'graphic.html',
})
export class GraphicPage {
  @ViewChild('canvas') canvasEl : ElementRef;
  private _CANVAS  : any;
  private _CONTEXT : any;
  xVlr : number;
  yVlr : number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform) {
   
    this.xVlr = this.navParams.get('x');
    this.yVlr = this.navParams.get('y');
    console.log('vlrx: '+this.xVlr);
    console.log('vlry: '+this.yVlr);
  }

  initialiseCanvas()
  {
     if(this._CANVAS.getContext)
     {
        this.setupCanvas();
     }
  }

  setupCanvas()
  {
     this._CONTEXT = this._CANVAS.getContext('2d');
     this._CONTEXT.fillStyle = "#ffffff";
     this._CONTEXT.fillRect(0, 0, this._CANVAS.width, this._CANVAS.height);
  }

  drawLine()
  {
     
     this._CONTEXT.beginPath();
     this._CONTEXT.moveTo(this.xVlr ,0);
     this._CONTEXT.lineTo(this.xVlr,300  );
     this._CONTEXT.stroke();
     this._CONTEXT.moveTo(0 ,this.yVlr);
     this._CONTEXT.lineTo(300, this.yVlr );
     this._CONTEXT.stroke();
  }

  
  drawSquare()
  {
    
     this._CONTEXT.beginPath();
     this._CONTEXT.rect(0 ,0, 300, 300);
     this._CONTEXT.lineWidth = 1;
    // this._CONTEXT.strokeStyle = '#ffffff';
     this._CONTEXT.stroke();
  }


  drawText()
  {
    
    this._CONTEXT.font="10px Georgia";
    this._CONTEXT.fillStyle = 'black';
    this._CONTEXT.fillText("ARENA",0,10);
    this._CONTEXT.fillText("MANCHA CEGA",200,10);
    this._CONTEXT.fillText("FACHADA",0,298);
    this._CONTEXT.fillText("DESCONHECIDA",200,298);
  }

  clearCanvas()
{
   this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
   this.setupCanvas();
}


  ionViewDidLoad() {
    console.log("didload");
    this._CANVAS 		    = this.canvasEl.nativeElement;
      this._CANVAS.width  	= this.platform.width()-30;
      this._CANVAS.height 	= this.platform.height()-280;

      this.initialiseCanvas();
     // this.clearCanvas();
      this.drawSquare();
      this.drawLine();
      this.drawText();
  }

}
