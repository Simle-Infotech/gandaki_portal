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

  getTableDetails(id) {
    return this.httpClient.get(`${environment.apiUrl}/portal/form?name=tableGroup&design=1&id=`+id)
      .pipe(retry(3), catchError(this.handleError));
  }

  getTableState(id) {
    return this.httpClient.get(`${environment.apiUrl}/portal/extra/TabStates?query={"tableID":"` + id + `"}`)
      .pipe(retry(3), catchError(this.handleError));
  }

  saveTableState(data) {
    return this.httpClient.post(`${environment.apiUrl}/portal/extra/TabStates`, data)
      .pipe(retry(3), catchError(this.handleError));
  }

  getSingleTableState(id) {
    return this.httpClient.get(`${environment.apiUrl}/portal/extra/TabStates?query={"tableID":"` + id + `"}&single=1`)
      .pipe(retry(3), catchError(this.handleError));
  }

  getOptionGroups(){
    return this.httpClient.get(`${environment.apiUrl}/portal/form?name=optionGroup&list`)
      .pipe(retry(3), catchError(this.handleError));
  }

  saveOptionGroup(data){
    return this.httpClient.post(`${environment.apiUrl}/portal/form?name=optionGroup`, data)
      .pipe(retry(3), catchError(this.handleError));
  }


}
