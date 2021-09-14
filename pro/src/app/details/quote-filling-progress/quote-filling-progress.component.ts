import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-filling-progress',
  templateUrl: './quote-filling-progress.component.html',
  styleUrls: ['./quote-filling-progress.component.css']
})
export class QuoteFillingProgressComponent implements OnInit {

  showModule:string = "choose_plan"
  capturedFromChilds = [] as any;
  df:any
  constructor(private router:Router) { }

  ngOnInit() {
  }

  updateShowModuleChoosePlan(eventFromChoosePlan: any){
    //console.log(updatedString);
    console.log(eventFromChoosePlan)
    this.showModule = eventFromChoosePlan.updateModule
    this.capturedFromChilds.push(eventFromChoosePlan.selPlan)
  }

  updateShowModulePersonalDetail(eventFromPersonDetails: any){
    this.showModule = eventFromPersonDetails.updateModule
  }
  
  updateShowModuleQuoteReview(eventFromQuoteReview: any){

    this.showModule = eventFromQuoteReview.updateModule

  }
  
}
