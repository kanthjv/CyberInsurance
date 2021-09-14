import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  title = 'pro';

  newLoginForm !: FormGroup

  private zipcode !: FormControl
  private firstName !: FormControl
  private lastName !: FormControl
  constructor(private router:Router){}
    ngOnInit(){
      this.zipcode =new FormControl(this.zipcode, [Validators.required,Validators.minLength(6),Validators.maxLength(6)])
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
    
    return this.zipcode.valid || this.zipcode.untouched
  }
  validateLastName(){
    return this.lastName.valid || this.lastName.untouched
  }
    

  saveQuote( ){
    console.log("in Zipcode")
    this.router.navigate(['/details'])
    
  }
  
}
