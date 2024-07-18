import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LabseqService {
  private baseUrl = 'http://localhost:8080/labseq/';

  constructor(private http: HttpClient) { }

  getLabseqValue(n: number): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}${n}`);
  }
}
