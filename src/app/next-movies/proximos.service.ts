import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProximosService {

  private apiKey: string = 'ac6354b9938a111d65e866c48b818fa8'; 
  private apiUrl: string = 'https://api.themoviedb.org/3/movie/';  

  constructor(private http: HttpClient) { }

  // Método para pegar os próximos filmes a serem lançados
  getProximosFilmes(): Observable<any> {
    const url = `${this.apiUrl}upcoming?api_key=${this.apiKey}&language=pt-BR`;  
    return this.http.get<any>(url);
  }
}
