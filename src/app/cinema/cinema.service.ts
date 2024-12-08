import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  private apiKey: string = 'ac6354b9938a111d65e866c48b818fa8'; // Substitua com sua chave da API TMDB
  private apiUrl: string = 'https://api.themoviedb.org/3/movie/now_playing';  // URL base corrigida

  constructor(private http: HttpClient) { }

  // Método para pegar os filmes em cartaz
  getFilmesEmCartaz(): Observable<any> {
    // Corrigido: não há necessidade de adicionar "/movie/now_playing" novamente
    const url = `${this.apiUrl}?api_key=${this.apiKey}&language=pt-BR`;  // Montagem correta da URL
    return this.http.get<any>(url);
  }
}
