
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IQuote } from 'src/app/shared/quote';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() onProceedFromPersonalDetails = new EventEmitter<any>()
  constructor(private route:ActivatedRoute) { }
  dateToday = new Date().toISOString().slice(0, 10);
  quotes !:IQuote
  personalForm !: FormGroup
  //  salutation !: FormControl
   name!: FormControl
   dob !: FormControl
   emails !: FormControl
   phonenumber !: FormControl
   ssn_number!: FormControl
   income_source!: FormControl



  additionalForm !: FormGroup
   policy_start_date!: FormControl
   policy_end_date!: FormControl
  // quote = {
  //   id:1,
  //   incidents_history:'kanth',
  //   policy_start_date:new Date(),
  //   policy_end_date: new Date(),
  //   person:{
  //       id:"sndsaj",
  //       salutation:"fsdfksdbf",
  //       firstname:"asndksj",
  //       lastname:"dfnsdf",
  //       dob:new Date(),
  //       email:"sdnsakjn",
  //       phonenumber:"dfnsdfj",
  //       ssn_number:"jfdns",
  //       income_source:"dfnsdkjfn"
  //   }

//}
p(df:FormControl){
  console.log(df)
  console.log(this.policy_start_date)
}
  showPersonalDetailsBtn:boolean=true;
  showAdditionalDetailsBtn:boolean=false;
  showIncidentsHistoryBtn:boolean=false
  showPersonalDetails:boolean=true;
  showAdditionalDetails:boolean=false;
  showIncidentsHistory:boolean=false
  areDetailsFilled:boolean=false
  ngOnInit() {

    this.quotes = this.route.snapshot.data['details']

    // this.salutation = new FormControl('',Validators.required)
    this.name = new FormControl('sadfsf',Validators.required)
    this.dob = new FormControl('dsfsdfdsf',Validators.required)
    this.emails = new FormControl('abc@co',[Validators.required,Validators.email])
    this.phonenumber = new FormControl('+91 0123456789',[Validators.required,Validators.pattern("^((\\+91 ?)|0)?[0-9]{10}$")])
    this.ssn_number = new FormControl('dsfsdf',Validators.required)
    this.income_source = new FormControl('dsfsdf',Validators.required)
    this.policy_start_date =  new FormControl('',Validators.required)
    this.policy_end_date = new FormControl ('',[Validators.required])

    this.personalForm = new FormGroup({
      // salutation : this.salutation,
      name : this.name,
      dob : this.dob,
      emails : this.emails,
      phonenumber : this.phonenumber,
      ssn_number: this.ssn_number,
      income_source : this.income_source
    })

    this.additionalForm = new FormGroup({
      policy_start_date: this.policy_start_date,
      policy_end_date : this.policy_end_date
    })

    

  }

  validateEndDate(c: FormControl){
    
    return (c.value > this.policy_start_date.value)?null:{
      endDateInvalid:{
        message:"InvalidEndDate"
      }
    }
  }

  
  

  



  expandPersonalDetails(){
    this.showAdditionalDetailsBtn = false
    this.showIncidentsHistoryBtn = false
    this.showPersonalDetails = true
    this.showAdditionalDetails = false
    this.showIncidentsHistory = false
    this.showPersonalDetailsBtn = true
  }

  expandAdditionalDetails(){
    this.showAdditionalDetailsBtn = true
    this.showIncidentsHistoryBtn = false
    this.showPersonalDetailsBtn = true
    this.showPersonalDetails = false
    this.showAdditionalDetails = true
    this.showIncidentsHistory = false
  }

  expandIncidentHistory(){
    this.showAdditionalDetailsBtn = true
    this.showIncidentsHistoryBtn = true
    this.showPersonalDetailsBtn = true
    this.showPersonalDetails = false
    this.showAdditionalDetails = false
    this.showIncidentsHistory = true
  }

  detailsFilled(){
    this.showPersonalDetails = false
    this.showAdditionalDetails = false
    this.showIncidentsHistory = false
    this.areDetailsFilled = true
  }

  proceedFromPD(){
    //console.log("quote")
    this.onProceedFromPersonalDetails.emit({updateModule:"review-quote"})
  }

}


