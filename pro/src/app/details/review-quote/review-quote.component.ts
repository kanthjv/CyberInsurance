import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

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
  total_premium!:number

  @Output() onProceedFromQuoteReview = new EventEmitter<any>();
  constructor(private router:Router) { 
    
  }
  ngOnInit(): void {
    console.log(this.detailInfo)

    this.sumAssured = this.detailInfo[0].insured
    this.premium = this.detailInfo[0].premium
    this.tax = this.premium*0.05

    this.total_premium = this.premium+this.tax

  }
  

  proceedFromQR(){
    this.onProceedFromQuoteReview.emit({updateModule:"confirm"})
  }

  editPlan(){
    this.onProceedFromQuoteReview.emit({updateModule:"choose_plan"})
    // this.router.navigate(['/details'])
  }

}
