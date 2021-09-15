import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IQuote } from './quote';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  constructor(private http:HttpClient) { }

  getQuotes(): Observable<IQuote[]>{
    return this.http.get<IQuote[]>("http://localhost:3000/quotes").pipe(
      tap(data=>console.log(data)),
      catchError(this.handleError)
    )
  }

  addQuote(quote:IQuote):Observable<any>{
    const options = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post("http://localhost:3000/quotes",quote,{headers:options})
  }

  private handleError(err:HttpErrorResponse) {
    let errMsg:string='';
    if (err.error instanceof Error) {
       
       console.log('An error occurred:', err.error.message);
        errMsg=err.error.message;} 
       else {
       
       console.log(`Backend returned code ${err.status}`);
          errMsg=err.error.status;
     }
        return throwError(errMsg); 
  }

}
