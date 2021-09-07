import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'posts', 
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css','../add-post/add-post.component.css']
})
export class PostsComponent implements OnInit {
  
  message:String = " ";
  myPast!: Post;
  //mypost: Post ;

  constructor(private postsservice: PostsServiceService) { }
  
  ngOnInit(): void {
    
    this.message="hello";
    this.myPast = this.postsservice.getPosts();
  }

}
