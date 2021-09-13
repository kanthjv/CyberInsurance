
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IQuote } from 'src/app/shared/quote';
@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }
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
p(df:FormGroup){
  console.log(df)
}
  showPersonalDetailsBtn:boolean=true;
  showAdditionalDetailsBtn:boolean=false;
  showIncidentsHistoryBtn:boolean=false
  showPersonalDetails:boolean=true;
  showAdditionalDetails:boolean=false;
  showIncidentsHistory:boolean=false
  areDetailsFilled:boolean=false
  ngOnInit() {

    // this.salutation = new FormControl('',Validators.required)
    this.name = new FormControl('',Validators.required)
    this.dob = new FormControl('',Validators.required)
    this.emails = new FormControl('abc@co',[Validators.required,Validators.email])
    this.phonenumber = new FormControl('+91 0123456789',[Validators.required,Validators.pattern("^((\\+91 ?)|0)?[0-9]{10}$")])
    this.ssn_number = new FormControl('',Validators.required)
    this.income_source = new FormControl('',Validators.required)
    this.policy_start_date =  new FormControl('',Validators.required)
    this.policy_end_date = new FormControl ('',Validators.required)

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

  
  

  validateName(){
    return this.name.valid || this.name.untouched
  }

  validateDob(){
    return this.dob.valid || this.dob.untouched
  }

  

  validatePhoneNumber(){
    return this.phonenumber.valid || this.phonenumber.untouched
  }

  validateSsn(){
    return this.ssn_number.valid || this.ssn_number.untouched
  }

  validateSource(){
    return this.income_source.valid || this.income_source.untouched
  }

  validateStratDate(){
    return this.policy_start_date.valid || this.policy_start_date.untouched
  }

  validateEndDate(){
    return this.policy_end_date.valid || this.policy_end_date.untouched
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

}
