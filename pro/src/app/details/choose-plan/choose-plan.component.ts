import { Component, OnInit,HostListener,ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlan } from 'src/app/shared/plan';
import { PlanDetailsService } from 'src/app/shared/plan-details.service';
import { IQuote } from 'src/app/shared/quote';
import * as $ from 'jquery'

@Component({
  selector: 'app-choose-plan',
  templateUrl: './choose-plan.component.html',
  styleUrls: ['./choose-plan.component.css']
})
export class ChoosePlanComponent implements OnInit {

  @Output() 
  onProceedFromChoosePlan = new EventEmitter<any>();
  //captureSelectedPlan = new EventEmitter<any>();

  

  constructor(private router:Router, private route:ActivatedRoute, private planSerivce:PlanDetailsService) { }
  

  plans !: IPlan[]
  selectedPlan : any
  errMsg = '';
  coverages=[] as any
  isActive: boolean = false
  showCoverageDetails = false
  ngOnInit(): void {
    console.log(this.selectedPlan)
  //console.log("in chooseplan");
  
    this.planSerivce.getPlans().subscribe(
      receivedPlans => this.plans=receivedPlans,
      error => this.errMsg = <any>error
    );
    
  }

  
  clicked(plan:any,id:number){
    
   this.selectedPlan = plan;
   this.coverages = this.selectedPlan.coverages;
   $('#child'+(id+1)).children().toggleClass('active').parent().siblings().children().removeClass('active')

   
    

   console.log(plan)
  }
  proceed(){
    //console.log("personal_details");
    
    //this.captureSelectedPlan.emit(this.selectedPlan)
    this.onProceedFromChoosePlan.emit({updateModule:"personal_details",selPlan:this.selectedPlan})
  }
  

}
