import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { wishItem } from '../shared/models/wishItem';
import { catchError } from 'rxjs';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WishService {

  constructor(private http: HttpClient) { }

  private getStandardOptions(): any{
    return {
      headers: new Headers({
        'Content-Type': 'application/json'

      }) 
      
    }
  }

  getWishes(){
    let options = this.getStandardOptions();
    // options.params = new HttpParams({
    //   fromObject:{
    //     format: 'json'
    //   }
    // })
    //the get method in httpClient returns an observable, if i haven't subscribed to that observable =>the request is not sent
    return this.http.get('assets/wishes.json?format=json', options).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse){
    if (error.status === 0) {
      console.error('There is an issue with the client or network:', error.error);
    } else {
      console.error('Server-side error: ', error.error)
    }

    return throwError(() => new Error('Cannot retrieve wishes from the server. Please try again.'));
  }
  

  private addWish(wish: wishItem){
    let options= this.getStandardOptions();
    options.headers = options.headers.set('Authorization', 'value-need-for-authorization' );
    this.http.post('assets/wishes.json', wish, options);
  }
}


