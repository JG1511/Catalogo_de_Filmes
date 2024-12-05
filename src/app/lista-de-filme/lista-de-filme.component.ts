import { Component, Input, OnInit } from '@angular/core';
import { FilmesService } from '../filme.service';

@Component({
  selector: 'app-lista-de-filme',
  standalone: true,
  imports: [],
  templateUrl: './lista-de-filme.component.html',
  styleUrls: ['./lista-de-filme.component.css']
})
export class ListaDeFilmeComponent implements OnInit {

  @Input() filmes: any[] = []; // array para armazenar os filmes encontrados

  constructor(private filmeService: FilmesService) {};

  ngOnInit(): void {};

  // Função para buscar filmes da API
  buscarFilmes(busca: string): void {
    this.filmeService.buscarFilme(busca).subscribe({
      next: (res) => {
        this.filmes = res.results; // a lista de filmes recebe os filmes encontrados
      },
      error: (error) => {
        console.error('Erro ao buscar filmes:', error);
      },
      complete: () => {
        console.log('Requisição completa!');
      }
    });
  }

  // Função que será chamada ao clicar no botão "Saiba Mais"
  mostrarDescricao(event: Event, descricao:string): void {
    event.preventDefault(); 
    alert(`${descricao}`);
    
  }
}
