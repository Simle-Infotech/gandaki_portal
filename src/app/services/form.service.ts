import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class FormService {
    constructor(private httpClient: HttpClient) {
    }

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

    getFormValues() {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=forms&list&design=1`)
            .pipe(retry(3), catchError(this.handleError));
    }

    saveFormValues(data) {
        return this.httpClient.post(`${environment.apiUrl}/portal/form?name=forms`, data)
            .pipe(retry(3), catchError(this.handleError));
    }

    getFormDetails(id) {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=forms&id=` + id + `&design=1`)
            .pipe(retry(3), catchError(this.handleError));
    }

    saveTableValues(data) {
        return this.httpClient.post(`${environment.apiUrl}/portal/form?name=tableGroup`, data)
            .pipe(retry(3), catchError(this.handleError));
    }

    getTableGroupValues() {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=tableGroup&list&design=1`)
            .pipe(retry(3), catchError(this.handleError));
    }

    getQuestionColumns(id) {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=tableDetail&design=1&id=` + id)
            .pipe(retry(3), catchError(this.handleError));
    }

    saveQuestionColumns(data) {
        return this.httpClient.post(`${environment.apiUrl}/portal/form?name=questionsColumns`, data)
            .pipe(retry(3), catchError(this.handleError));
    }

    getDataHeaders(id) {
        return this.httpClient.get(`${environment.apiUrl}/portal/parser?id=` + id)
            .pipe(retry(3), catchError(this.handleError));
    }

    getData(id) {
        return this.httpClient.get(`${environment.apiUrl}/portal/data?id=` + id)
            .pipe(retry(3), catchError(this.handleError));
    }

    saveData(id, data) {
        return this.httpClient.post(`${environment.apiUrl}/portal/data?id=` + id, data)
            .pipe(retry(3), catchError(this.handleError));
    }

  getCollectionList(id) {
    return this.httpClient.get(`${environment.apiUrl}/portal/form?name=collectionInTable&id=` + id)
      .pipe(retry(3), catchError(this.handleError));
  }
}
