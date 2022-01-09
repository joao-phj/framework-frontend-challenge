import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Postagem } from './models/postagem';
import { Album } from './models/album';
import { Todo } from './models/todo';

@Injectable({
  providedIn: 'root'
})
export class FetcherService {

  postsUrl =  'https://jsonplaceholder.typicode.com/posts';
  albumsUrl = 'https://jsonplaceholder.typicode.com/albums';
  toDoUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Postagem[]>(this.postsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getAlbuns() {
    return this.http.get<Album[]>(this.albumsUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  getToDos() {
    return this.http.get<Todo[]>(this.toDoUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }
}
