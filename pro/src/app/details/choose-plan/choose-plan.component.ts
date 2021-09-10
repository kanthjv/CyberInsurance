import { Component, OnInit,HostListener,ElementRef } from '@angular/core';

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.css']
})
export class ChoosePlanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  clicked(){
    
    console.log("Clicked")
  }

}
