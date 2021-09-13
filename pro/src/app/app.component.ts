import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ILogin, IQuote } from './shared/quote';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pro';

  newLoginForm !: FormGroup

  private zipcode !: FormControl
  private firstName !: FormControl
  private lastName !: FormControl
  constructor(){}
    ngOnInit(){
      this.zipcode =new FormControl(this.zipcode, Validators.required)
      this.firstName = new FormControl(this.firstName, Validators.required)
      this.lastName = new FormControl(this.lastName, Validators.required)

      this.newLoginForm =new FormGroup({
        zipcode : this.zipcode,
        firstName : this.firstName,
        lastName : this.lastName

      })
    }


  viewRetereivedDetails:boolean = false;
  reteriveQuote(){
    this.viewRetereivedDetails = true;
  }

  validateFirstName(){
    return this.firstName.valid || this.firstName.untouched
  }
  validateZipcode(){
    console.log("in Zipcode")
    return this.zipcode.valid || this.zipcode.untouched
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
  

  saveQuote(formValues: IQuote ){
    console.log(formValues)
  }
  
}
