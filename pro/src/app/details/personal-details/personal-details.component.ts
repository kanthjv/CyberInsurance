
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Form, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { IPerson, IQuote } from 'src/app/shared/quote';
import * as $ from 'jquery'

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  @Output() onProceedFromPersonalDetails = new EventEmitter<any>()
  constructor(private route:ActivatedRoute) { }
  dateToday = new Date().toISOString().slice(0, 10);
  quote :IQuote = new IQuote();
  person : IPerson = new IPerson()
  personalForm !: FormGroup
  //  salutation !: FormControl
   name!: FormControl
   dob !: FormControl
   emails !: FormControl
   phonenumber !: FormControl
   ssn_number!: FormControl
   income_source!: FormControl
   sels!:any


   additionalForm !: FormGroup
   policy_start_date!: FormControl
   policy_end_date!: FormControl
 
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
  selectedOption!:any
  ngOnInit() {

    

    // this.salutation = new FormControl('',Validators.required)
    this.name = new FormControl('',Validators.required)
    this.dob = new FormControl('',Validators.required)
    this.emails = new FormControl('',[Validators.required,Validators.email])
    this.phonenumber = new FormControl('+91 0123456789',[Validators.required,Validators.pattern("^((\\+91 ?)|0)?[0-9]{10}$")])
    this.ssn_number = new FormControl('',Validators.required)
    this.income_source = new FormControl('',Validators.required)
    this.policy_start_date =  new FormControl(this.dateToday,Validators.required)
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
  getFormControlValue(c:FormControl){

    return c.value;

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
    this.areDetailsFilled = false
  }

  expandAdditionalDetails(){
    this.showAdditionalDetailsBtn = true
    this.showIncidentsHistoryBtn = false
    this.showPersonalDetailsBtn = true
    this.showPersonalDetails = false
    this.showAdditionalDetails = true
    this.showIncidentsHistory = false
    this.areDetailsFilled = false
  }

  expandIncidentHistory(){
    this.showAdditionalDetailsBtn = true
    this.showIncidentsHistoryBtn = true
    this.showPersonalDetailsBtn = true
    this.showPersonalDetails = false
    this.showAdditionalDetails = false
    this.showIncidentsHistory = true
    this.areDetailsFilled = false
  }

  detailsFilled(){
    this.showPersonalDetails = false
    this.showAdditionalDetails = false
    this.showIncidentsHistory = false
    this.areDetailsFilled = true
  }

 
  
  updateIncHistory(e:any){
    this.selectedOption = e.target.value;
    console.log(this.selectedOption)
  }
  
  
  

  proceedFromPD(){
    
    //this.updatePerson("name",this.getFormControlValue(this.name))
    this.person.name = this.getFormControlValue(this.name)
    this.person.dob = this.personalForm.get("dob")?.value;
    this.person.email = this.personalForm.get("emails")?.value;
    this.person.phonenumber = this.personalForm.get("phonenumber")?.value;
    this.person.ssn_number = this.personalForm.get("ssn_number")?.value;
    this.person.income_source = this.personalForm.get("income_source")?.value

    this.quote.id = Date.now().toString(36) + Math.random().toString(36).substring(2);
    this.quote.policy_start_date = this.additionalForm.get("policy_start_date")?.value
    this.quote.policy_end_date = this.additionalForm.get("policy_end_date")?.value

    
    

    
    // this.selectedOption = document.querySelector("input:radio[name=custom-radio]:checked")
    // console.log(this.selectedOption)
    

    this.quote.person = this.person


    this.onProceedFromPersonalDetails.emit({updateModule:"review-quote","personalInfo":this.quote})
  }

}


