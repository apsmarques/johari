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

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform:Platform) {
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
     this._CONTEXT.fillRect(0, 0, this.platform.width(), this.platform.height());
  }

  drawLine(x:number,y:number)
  {
     
     this._CONTEXT.beginPath();
     this._CONTEXT.moveTo(x ,0);
     this._CONTEXT.lineTo(x,this.platform.height()  );
     this._CONTEXT.stroke();
     this._CONTEXT.moveTo(0 ,y);
     this._CONTEXT.lineTo(this.platform.width(), y );
     this._CONTEXT.stroke();
  }

  
  drawSquare()
  {
    
     this._CONTEXT.beginPath();
     this._CONTEXT.rect(0 ,0, this._CANVAS.width, this._CANVAS.height);
     this._CONTEXT.lineWidth = 1;
    // this._CONTEXT.strokeStyle = '#ffffff';
     this._CONTEXT.stroke();
  }

  clearCanvas()
{
   this._CONTEXT.clearRect(0, 0, this._CANVAS.width, this._CANVAS.height);
   this.setupCanvas();
}


  ionViewDidLoad() {
    this._CANVAS 		    = this.canvasEl.nativeElement;
      this._CANVAS.width  	= this.platform.width();
      this._CANVAS.height 	= this.platform.height();

      this.initialiseCanvas();
     // this.clearCanvas();
      this.drawSquare();
      this.drawLine(100,100);
  }

}
