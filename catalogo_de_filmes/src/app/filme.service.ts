import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  
  private apiKey = 'ac6354b9938a111d65e866c48b818fa8'; // Variavel que armazena a chave da API
  private baseURL = 'https://api.themoviedb.org/3'; // Define o ponto de partida das requisições da API

  constructor(private http: HttpClient) { // Esse contrutor ta fazendo uma injeção de independencia, o httpCliente permite realizar requisições HTTP(GET,POST,PUT,DELET) 

  }
  buscarFilme(busca : string) : Observable <APIresposta> { // o Observable é utilizado para emitir respostas ao longo tempo 
    return this.http.get<APIresposta>(
      `${this.baseURL}/search/movie?api_key=${this.apiKey}&query=${busca}`
    );
  }
}

export interface Filme{ // ao inves de utilizar o any , se faz uma interfaces para definir os campos esperados na resposta
  id : number;
  title : string;
  overview : string;
  release_date: string;
  poster_path : string;
}

export interface APIresposta{
  page : number;
  results : Filme[];
  total_page : number;
  total_results : number;
}
