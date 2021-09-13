import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quote-filling-progress',
  templateUrl: './quote-filling-progress.component.html',
  styleUrls: ['./quote-filling-progress.component.css']
})
export class QuoteFillingProgressComponent implements OnInit {

  showModule:string = "personal_details"

  constructor() { }

  ngOnInit(): void {
  }

}
