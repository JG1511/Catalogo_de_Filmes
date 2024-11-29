import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  
  private apiKey = 'ac6354b9938a111d65e866c48b818fa8'; // Variavel que armazena a chave da API
  private baseURL = 'https://api.themoviedb.org/3'; // Define o ponto de partida das requisições da API





  constructor() { }
}
