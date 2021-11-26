import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs-compat/add/operator/catch';
import {AppError} from '../common/app-error';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http: HttpClient) { }

  getPost(): Observable<Object>{
    return this.http.get(this.url);
  }

  createPost(post: any): Observable<Object>{
    return this.http.post(this.url, JSON.stringify(post));
  }

  updatePost(post: any): Observable<Object>{
    return this.http.patch(this.url + '/' + post.id, JSON.stringify({isRead: true}));
  }

  deletePost(id: number): Observable<Object>{
    return this.http.delete(this.url + '/' + id)
      .catch((error: Response) => {
       return Observable.throw(new AppError(error));
      });
  }
}

