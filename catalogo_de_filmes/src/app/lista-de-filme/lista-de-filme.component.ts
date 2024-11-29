import { Component, OnInit } from '@angular/core';
import { FilmesService } from '../filme.service';

@Component({
  selector: 'app-lista-de-filme',
  standalone: true,
  imports: [],
  templateUrl: './lista-de-filme.component.html',
  styleUrl: './lista-de-filme.component.css'
})
export class ListaDeFilmeComponent implements OnInit {

  filmes : any[] = []; // array para armazenar os filmes encontrados

  constructor(private filmeService : FilmesService){};

  ngOnInit(): void {};
  
  buscarFilmes (busca : string) : void {
    this.filmeService.buscarFilme(busca).subscribe(
      (res) => {
        this.filmes = res.results // armazena os filmes encontrados na array filmes 
      },(error) =>{
        console.error('Erro ao buscar filmes:', error);
      }
    );
      
    
  }


}
