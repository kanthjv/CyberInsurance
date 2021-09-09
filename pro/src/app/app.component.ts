import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pro';
  zipcode!:string;
  firstName!:string
  lastName!:string;
  viewRetereivedDetails:boolean = false;
  reteriveQuote(){
    this.viewRetereivedDetails = true;
  }

  
}
