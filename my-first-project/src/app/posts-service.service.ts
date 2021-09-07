import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post';

@Injectable({
  providedIn: 'root'
})
export class PostsServiceService {

  url = "http://localhost:3000/";
  constructor(private http: HttpClient) { 

  }

  pracobj:Post = {
    "id": 1,
    "title": "",
    "postId": ""
  }



 getPosts(): Post{
  this.http.get<Post>(this.url).subscribe((data: Post) => {
    //console.log(data);
    this.pracobj.id=data.id,
    this.pracobj.postId=data.postId,
    this.pracobj.title=data.title;
    //console.log("posts service");
    //return data;
    }
  );

  return this.pracobj;
 } 
}
