import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, throwError} from 'rxjs';
import { User } from '../models/user';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {environment } from '../../environments/environment';
import {catchError, map, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  constructor(
    private httpClient: HttpClient
  ) {}

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  getSidebar() {
    return this.httpClient.get(`${environment.apiUrl}/portal/form?name=forms&list&design=1`)
        .pipe(retry(3), catchError(this.handleError));
  }
}
