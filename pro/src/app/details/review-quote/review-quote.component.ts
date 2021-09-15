import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IQuote } from 'src/app/shared/quote';
import { QuotesService } from 'src/app/shared/quotes.service';

@Component({
  selector: 'app-review-quote',
  templateUrl: './review-quote.component.html',
  styleUrls: ['./review-quote.component.css']
})
export class ReviewQuoteComponent implements OnInit {

  @Input() detailInfo = [] as any

  sumAssured!:number;
  premium!:number;
  tax!:number;
  total_premium!:number;
  addonCost:number = 0;
  errorMessage = ''
  addonCost_premium = 0

  quote_details !:  IQuote 

  @Output() onProceedFromQuoteReview = new EventEmitter<any>();
  constructor(private router:Router, private quoteService:QuotesService) { 
    
  }
  ngOnInit(): void {
    console.log(this.detailInfo)

    this.sumAssured = this.detailInfo[0].insured
    this.premium = this.detailInfo[0].premium
    this.tax = this.premium*0.05
    this.total_premium = this.premium+this.tax
    //this.addonCost = this.detailInfo
    var local_addon = this.detailInfo[0].addons
    //console.log(local_addon)
    for(var i =0; i< local_addon.length;i++){
      this.addonCost += local_addon[i].amount
    }

    this.addonCost_premium = this.addonCost*0.05
    //console.log(this.addonCost_premium);
    
    this.total_premium = this.premium+this.tax+this.addonCost_premium

    //console.log(this.total_premium);
    
    this.quote_details = this.detailInfo[1].personalInfo;
    this.quote_details.total_premium = this.total_premium
    this.quote_details.plan = this.detailInfo[0]
    
    //console.log(this.quote_details)

  }
  

  proceedFromQR(){

    this.quoteService.addQuote(this.quote_details).subscribe(
      hero => this.fnSuc(hero),
      error => this.errorMessage = <any>error

    )
    this.onProceedFromQuoteReview.emit({updateModule:"confirm"})
  }

  fnSuc(dum:any){
    this.onProceedFromQuoteReview.emit({updateModule:"confirm"})
  }

  editPlan(){
    this.onProceedFromQuoteReview.emit({updateModule:"choose_plan"})
    // this.router.navigate(['/details'])
  }
  editDetails(){
    console.log("in cort");
    
    this.onProceedFromQuoteReview.emit({updateModule:"personal_details"})
  }

}
