import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  constructor() { }
  firstName = ''
  lastName = ''
  zipcode = '';
  showPersonalDetailsBtn:boolean=true;
  showAdditionalDetailsBtn:boolean=false;
  showIncidentsHistoryBtn:boolean=false
  showPersonalDetails:boolean=true;
  showAdditionalDetails:boolean=false;
  showIncidentsHistory:boolean=false
  areDetailsFilled:boolean=false
  ngOnInit(): void {
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
