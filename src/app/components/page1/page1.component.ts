import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component {
  Name=""
  GetVal(e:any){
    console.log(e.target.value);
  }
  chg1(){
    this.Name=""
  }
}
