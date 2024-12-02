import { Component, Input, input, OnInit } from '@angular/core';
import { FilmesService } from '../filme.service';

@Component({
  selector: 'app-lista-de-filme',
  standalone: true,
  imports: [],
  templateUrl: './lista-de-filme.component.html',
  styleUrl: './lista-de-filme.component.css'
})
export class ListaDeFilmeComponent implements OnInit {

  @Input() filmes : any[] = []; // array para armazenar os filmes encontrados

  constructor(private filmeService : FilmesService){};

  ngOnInit(): void {};
  
  buscarFilmes (busca : string) : void {
    this.filmeService.buscarFilme(busca).subscribe({ // o subscribe é usado para escutar o observable 
      next: (res) => { // é chamado quando observable emite um valor e o res representa um resultado emitido pela api
          this.filmes = res.results; // a lista de filmes rescebe o filme que ele é chamado
      },
      error: (error) => { // quando acontece algum problema com o HTTP
          console.error('Erro ao buscar filmes:', error);
      },
      complete: () => {
          console.log('Requisição completa!'); // É chamado com é completado 
      },
  });
    
  }


}
