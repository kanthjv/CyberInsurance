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
  selectedPlan! : IPlan
  errMsg = '';
  showAddons = false
  dummy !: IPlan;
  selectedAddons = [] as any
  coverages=[] as any;
  addons = [] as any;
  isActive: boolean = false
  showCoverageDetails = false
  addonPrice:number = 0
  ngOnInit(): void {
    console.log(this.selectedPlan)
  //console.log("in chooseplan");
  
    this.planSerivce.getPlans().subscribe(
      receivedPlans => this.plans=receivedPlans,
      error => this.errMsg = <any>error
    );
    
  }

  
  clicked(plan:any,id:number){
    this.selectedAddons = []
    $('#child'+(id+1)).children().toggleClass('active').parent().siblings().children().removeClass('active')
    
    if($('#child'+(id+1)).children().hasClass("active")){
      this.selectedPlan = plan;
      this.coverages = this.selectedPlan.coverages;
      this.addons = this.selectedPlan.addons;
      this.showAddons = true
      this.addonPrice = 0;
      
   }
   else{
     console.log(this.dummy)
     this.selectedPlan = this.dummy;
     this.coverages = []
     this.addons = []
     this.showAddons = true
     this.addonPrice = 0;
   }
 
  }

  
  addSelectedAddon(addOn:any,k:number){
    this.selectedAddons.push(addOn)
    for(var i=0; i<this.addons.length;i++){
      if(addOn.coverage_id == this.addons[i].coverage_id){
        this.addons.splice(i,1)
      }
    }
    // $('#addonChild'+(k+1)).addClass('selected')
    // $('#addonChild'+(k+1)).prop('disabled', true)
    console.log(addOn);
    
    this.addonPrice += addOn.amount;
    console.log(this.addonPrice);
    
  }

  

  proceed(){
    console.log("personal_details");
    
    //this.captureSelectedPlan.emit(this.selectedPlan)
    this.onProceedFromChoosePlan.emit({updateModule:"personal_details",selPlan:this.selectedPlan,addonTotal:this.addonPrice})
  }
  
  removeSelectedAddon(addOn:any){
    var removedAddon;
    this.addonPrice -= addOn.amount
    for(var i=0; i<this.selectedAddons.length;i++){
      if(addOn.coverage_id == this.selectedAddons[i].coverage_id){
        removedAddon = this.selectedAddons.splice(i,1)
        //console.log(removedAddon)
        this.addons.push(removedAddon[i])
        //console.log(this.addons);
        
      }
    }
  }

}
