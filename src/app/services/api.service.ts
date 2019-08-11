import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import {
  SHEETS_API_KEY,
  SHEETS_ID,
  SHEETS_API_URL
} from '../../../app-variables.js';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public getValues(range: string): Observable<any> {
    return this.http.get(
      `${SHEETS_API_URL}/${SHEETS_ID}/values/${range}?majorDimension=COLUMNS&key=${SHEETS_API_KEY}`
    );
  }
}
