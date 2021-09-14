import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,throwError } from 'rxjs';
import { IPlan } from './plan';
import {catchError, tap} from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PlanDetailsService {

  constructor(private http:HttpClient) { }

  getPlans(): Observable<IPlan[]>{
    return this.http.get<IPlan[]>('http://localhost:3000/insurancePlans').pipe(
      tap((data)=>console.log(data)),
      catchError(this.handleError)
    )
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
