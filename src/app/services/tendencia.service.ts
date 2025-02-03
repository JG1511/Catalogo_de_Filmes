import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TendenciaService {

  private apiKey: string = 'ac6354b9938a111d65e866c48b818fa8'; 

  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  getTendenciaEmAlta() : Observable<any>{
    const url = `${this.apiUrl}/trending/all/day?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
