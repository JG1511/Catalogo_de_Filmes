import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {


  private apiKey: string = 'ac6354b9938a111d65e866c48b818fa8'; 
  private apiUrl: string = 'https://api.themoviedb.org/3/movie/now_playing';  


  constructor(private http: HttpClient) { }

  // Método para pegar os filmes em cartaz
  getFilmesEmCartaz(): Observable<any> {

    const url = `${this.apiUrl}?api_key=${this.apiKey}&language=pt-BR`; 

    return this.http.get<any>(url);
  }
}
