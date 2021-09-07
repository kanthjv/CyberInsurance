import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
  //styles:['h1{color:red;font-size:60px}']
})
export class AddPostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmitModelBased(){
    console.log("Reactive form submitted");
  
  }

}
