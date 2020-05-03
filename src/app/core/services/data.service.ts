import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import {
  COIVD_STATEWISE_APIURL,
  COIVD_DISTRICTWISE_APIURL,
} from '../../shared/common/constant';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  /** GET statewise data. */
  getStateWiseData(): Observable<any> {
    return this.http.get<any[]>(COIVD_STATEWISE_APIURL);
  }

  getDistrictWiseData(): Observable<any> {
    return this.http.get<any[]>(COIVD_DISTRICTWISE_APIURL);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
}
