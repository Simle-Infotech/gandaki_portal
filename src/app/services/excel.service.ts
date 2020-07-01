import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ExcelService {
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

    getExcelColumns() {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=questionsColumns&list&design=1`)
            .pipe(retry(3), catchError(this.handleError));
    }

    getExcelRows() {
        return this.httpClient.get(`${environment.apiUrl}/portal/form?name=questions&list&design=1`)
            .pipe(retry(3), catchError(this.handleError));
    }


    saveExcelRows(data) {
        return this.httpClient.post(`${environment.apiUrl}/portal/form?name=questionsColumns`, data)
            .pipe(retry(3), catchError(this.handleError));
    }


}
