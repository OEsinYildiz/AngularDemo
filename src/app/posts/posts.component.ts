import {Component, OnInit} from '@angular/core';
import {PostService} from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  posts: any;

  constructor(private service: PostService) {
  }

  ngOnInit(): void {
    this.service.getPost().subscribe(response => {
      this.posts = response;
    }, error => {
      alert('An unexpected error occurred');
      console.log(error);
    });
  }

  createPost(input: HTMLInputElement): void {
    let post: any = {title: input.value};
    input.value = '';
    this.service.createPost(post)
      .subscribe(response => {
        post['id'] = response;
        this.posts.splice(0, 0, post); // Array içerisinde en üste yerleştirmek için kullanılır
        // splice yerine push kullansak en alta eklerdi
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');
        console.log(error);
      });
  }

  updatePost(post: any): void {
    this.service.updatePost(post)
      .subscribe((response) => {
        console.log(response);
      }, error => {
        alert('An unexpected error occurred');
        console.log(error);
      });
  }

  delete(post: any): void {
    this.service.deletePost(345)
      .subscribe(
        (response) => {
              let index = this.posts.indexOf(post);
              this.posts.splice(index, 1);
              console.log(response);
      },
        (error: Response)  => {
              if (error.status === 404) {
                alert('This post has already been deleted.');
                console.log(error);
              }
              else {
                alert('An unexpected error occurred');
                console.log(error);
              }
      });
  }


}
