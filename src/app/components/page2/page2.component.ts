import { Component } from '@angular/core';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component {
  counter = 1;
  timerId: any;
  imgSrc = "assets/images/1.jpg"
  
  btn1(){
    if(this.counter<8){
      this.imgSrc=`assets/images/${++this.counter}.jpg`
    }
  }
  btn2(){
    if(this.counter>1){
      this.counter --;
      this.imgSrc=`assets/images/${this.counter}.jpg`
    }
  }
  btn3(){
    this.timerId =setInterval(()=>{
     if(this.counter==8){
       this.counter=0
     }
    this.imgSrc = `assets/images/${++this.counter}.jpg`;

   },1000)
 }
 btn4(){
  clearInterval(this.timerId)
 }
}
