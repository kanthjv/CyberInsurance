import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quote-filling-progress',
  templateUrl: './quote-filling-progress.component.html',
  styleUrls: ['./quote-filling-progress.component.css']
})
export class QuoteFillingProgressComponent implements OnInit,AfterViewInit {

  showModule:string = "choose_plan"
  capturedFromChilds = [] as any;
  df:any
  constructor(private router:Router) { }


  

  ngOnInit() {

    
    
  }
  ngAfterViewInit(){
    console.log("in after")
    if(this.showModule=="choose_plan"){
      $('#plan').addClass('active').siblings().removeClass('active')
    }

    if(this.showModule=="personal_details"){
      console.log("ope")
      
    }

    if(this.showModule=="review-quote"){
    }
    
    if(this.showModule=="confirm"){
    }
  }
  updateShowModuleChoosePlan(eventFromChoosePlan: any){
    //console.log(updatedString);
    console.log(eventFromChoosePlan)
    this.showModule = eventFromChoosePlan.updateModule
    this.capturedFromChilds.push(eventFromChoosePlan.selPlan)
    $('#personal').addClass('active').siblings().removeClass('active')
  }
  
  updateShowModulePersonalDetail(eventFromPersonDetails: any){
    this.showModule = eventFromPersonDetails.updateModule
    this.capturedFromChilds.push(eventFromPersonDetails)
    //console.log(this.capturedFromChilds)
    $('#payment').addClass('active').siblings().removeClass('active')
  }
  
  updateShowModuleQuoteReview(eventFromQuoteReview: any){
    
    this.showModule = eventFromQuoteReview.updateModule
    $('#confirm').addClass('active').siblings().removeClass('active')
    
  }
  
}
