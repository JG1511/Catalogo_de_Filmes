import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  private apiKey: string = 'ac6354b9938a111d65e866c48b818fa8'; // Substitua com sua chave da API TMDB
  private apiUrl: string = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) { }

  // Método para pegar os animes em alta
  getAnimesEmAlta(): Observable<any> {
    const url = `${this.apiUrl}/trending/all/day?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
